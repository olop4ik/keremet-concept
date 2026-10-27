(function () {
  'use strict';

  var D = window.KEREMET;
  var LANGS = ['ru', 'kz', 'en'];
  var lang = pickLang();
  var root = document.documentElement;

  var $ = function (sel, scope) { return (scope || document).querySelector(sel); };
  var $$ = function (sel, scope) { return Array.prototype.slice.call((scope || document).querySelectorAll(sel)); };

  // ---------- helpers ----------

  function store(key, value) {
    try {
      if (value === undefined) return localStorage.getItem(key);
      localStorage.setItem(key, value);
    } catch (e) { return null; }
  }

  function pickLang() {
    var fromUrl = null;
    try { fromUrl = new URLSearchParams(location.search).get('lang'); } catch (e) { /* старый браузер */ }
    if (LANGS.indexOf(fromUrl) > -1) return fromUrl;
    var saved = store('keremet-lang');
    if (LANGS.indexOf(saved) > -1) return saved;
    return 'ru';
  }

  function t(v) {
    if (v == null) return '';
    if (typeof v === 'string' || Array.isArray(v)) return v;
    return v[lang] != null ? v[lang] : v.ru;
  }

  function ui(key, vars) {
    var s = window.UI[lang][key];
    if (s == null) s = window.UI.ru[key];
    // split/join, а не replace: в тексте запроса могут быть «$&» и подобное
    if (vars) Object.keys(vars).forEach(function (k) { s = s.split('{' + k + '}').join(vars[k]); });
    return s;
  }

  function plural(key, n) {
    var forms = ui(key);
    var idx = 2;
    if (lang === 'ru') {
      var m10 = n % 10, m100 = n % 100;
      idx = m10 === 1 && m100 !== 11 ? 0 : (m10 >= 2 && m10 <= 4 && (m100 < 12 || m100 > 14) ? 1 : 2);
    } else if (lang === 'en') {
      idx = n === 1 ? 0 : 2;
    }
    return forms[idx].split('{n}').join(n);
  }

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function norm(s) {
    return String(s).toLowerCase().replace(/ё/g, 'е').replace(/[‑–—]/g, '-')
      .replace(/[^0-9a-zа-яәғқңөұүһі\s\/+-]/g, ' ');
  }

  // "14-30" -> tel:+77273773333,1430 (пауза и добавочный на телефоне)
  function telExt(ext) {
    return 'tel:' + D.phone.tel + ',' + ext.replace(/\D/g, '');
  }

  function telHref(display) {
    return 'tel:' + display.replace(/[^\d+]/g, '');
  }

  function icon(id, size) {
    size = size || 20;
    return '<svg aria-hidden="true" width="' + size + '" height="' + size + '"><use href="#i-' + id + '"/></svg>';
  }

  function linkUrl(l) {
    return l.url === 'MAP' ? D.mapUrl : l.url;
  }

  function extLinks(list) {
    return list.map(function (e) {
      return '<a class="ext" href="' + telExt(e) + '" aria-label="' + esc(ui('callExt', { ext: e })) + '">' + esc(e) + '</a>';
    }).join('');
  }

  function newTabHint() {
    return '<span class="sr"> (' + esc(ui('newTab')) + ')</span>';
  }

  // ---------- static strings ----------

  function applyStatic() {
    root.lang = ui('htmlLang');
    document.title = ui('title');
    $('meta[name="description"]').setAttribute('content', ui('description'));

    $$('[data-i18n]').forEach(function (el) { el.textContent = ui(el.getAttribute('data-i18n')); });
    $$('[data-i18n-ph]').forEach(function (el) { el.placeholder = ui(el.getAttribute('data-i18n-ph')); });
    $$('[data-i18n-aria]').forEach(function (el) { el.setAttribute('aria-label', ui(el.getAttribute('data-i18n-aria'))); });
    $$('[data-i18n-alt]').forEach(function (el) { el.alt = ui(el.getAttribute('data-i18n-alt')); });

    // сообщения формы, которые уже показаны, переводим вместе со страницей
    $$('[data-msg]').forEach(function (el) {
      var vars = el.getAttribute('data-vars');
      el.textContent = ui(el.getAttribute('data-msg'), vars ? JSON.parse(vars) : null);
    });

    $$('.langs button').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-lang') === lang));
    });
  }

  // ---------- sections ----------

  function renderCats() {
    $('#cats').innerHTML = D.categories.map(function (c) {
      return '<button type="button" class="cat" data-cat="' + c.id + '" aria-haspopup="dialog">' +
        '<span class="cat__icon">' + icon(c.icon, 32) + '</span>' +
        '<span class="cat__title">' + esc(t(c.title)) + '</span>' +
        '<span class="cat__text">' + esc(t(c.summary)) + '</span>' +
        '<span class="cat__more">' + esc(ui('open')) + icon('arrow', 18) + '</span>' +
        '</button>';
    }).join('');
  }

  function renderOnline() {
    $('#onlineList').innerHTML = D.online.map(function (g) {
      var items = t(g.items);
      return '<article class="og">' +
        '<h3>' + esc(t(g.title)) + '</h3>' +
        '<p class="og__count">' + esc(plural('onlineCount', items.length)) + '</p>' +
        '<ul>' + items.map(function (i) { return '<li>' + esc(i) + '</li>'; }).join('') + '</ul>' +
        '<a class="btn btn--ghost" href="' + D.portal + '" target="_blank" rel="noopener">' +
        esc(ui('onlineApply')) + newTabHint() + icon('ext', 18) + '</a>' +
        '</article>';
    }).join('');
  }

  function renderFaculties() {
    var sel = $('#faculty');
    var prev = sel.value;
    sel.innerHTML = '<option value="">' + esc(ui('facultyPick')) + '</option>' +
      D.faculties.map(function (f, i) {
        return '<option value="' + i + '">' + esc(t(f.name)) + '</option>';
      }).join('');
    sel.value = prev;
    renderFacultyOut();
  }

  function renderFacultyOut() {
    var i = $('#faculty').value;
    var out = $('#facultyOut');
    if (i === '') { out.innerHTML = ''; return; }
    var f = D.faculties[+i];
    out.innerHTML = '<span>' + esc(ui('facultyResult')) + '</span>' +
      '<span class="faculty__exts"><span class="dir__lbl">' + esc(ui('ext')) + '</span>' + extLinks(f.ext.split(/,\s*/)) + '</span>';
  }

  function allOffices() {
    var list = [];
    D.categories.forEach(function (c) {
      c.offices.forEach(function (o, idx) { list.push({ cat: c, office: o, idx: idx }); });
    });
    return list;
  }

  function renderDirectory() {
    $('#directory').innerHTML = allOffices().filter(function (x) { return x.office.ext.length; })
      .map(function (x) {
        return '<li><button type="button" class="dir__name" data-cat="' + x.cat.id + '" data-office="' + x.idx + '" aria-haspopup="dialog">' +
          esc(t(x.office.name)) + '</button>' +
          '<span class="dir__ext"><span class="dir__lbl">' + esc(ui('ext')) + '</span>' + extLinks(x.office.ext) + '</span></li>';
      }).join('');
  }

  function renderCampus() {
    $('#mosaic').innerHTML = D.campus.map(function (p) {
      return '<li><figure><img src="img/' + p.img + '-sm.webp" width="720" height="480" loading="lazy" alt="">' +
        '<figcaption>' + esc(t(p.title)) + '</figcaption></figure></li>';
    }).join('');
    $('#campusLinks').innerHTML = D.campusLinks.map(function (l) {
      return '<li><a href="' + esc(linkUrl(l)) + '" target="_blank" rel="noopener">' + esc(t(l.label)) + newTabHint() + icon('ext', 16) + '</a></li>';
    }).join('');
  }

  function renderTopics() {
    var sel = $('#fTopic');
    var prev = sel.value;
    sel.innerHTML = '<option value="">' + esc(ui('fTopicAny')) + '</option>' +
      allOffices().map(function (x, i) {
        return '<option value="' + i + '">' + esc(t(x.office.name)) + '</option>';
      }).join('');
    sel.value = prev;
  }

  function renderFooter() {
    $('#footContacts').innerHTML =
      '<li>' + icon('pin', 18) + '<a href="' + esc(D.mapUrl) + '" target="_blank" rel="noopener">' + esc(t(D.address)) + newTabHint() + '</a></li>' +
      '<li>' + icon('phone', 18) + '<a href="tel:' + D.phone.tel + '">' + D.phone.display + '</a></li>' +
      '<li>' + icon('phone', 18) + '<span>' + esc(ui('footerDirector')) + ': ' +
        D.directorPhones.map(function (p) { return '<a href="' + telHref(p) + '">' + p + '</a>'; }).join(', ') + '</span></li>' +
      '<li>' + icon('mail', 18) + '<a href="mailto:' + D.email + '">' + D.email + '</a></li>';
    $('#footLinks').innerHTML = D.links.map(function (l) {
      return '<li><a href="' + l.url + '" target="_blank" rel="noopener">' + esc(t(l.label)) + newTabHint() + '</a></li>';
    }).join('');
  }

  function renderChips() {
    var box = $('#chips');
    $$('.chip', box).forEach(function (c) { c.remove(); });
    ui('popularItems').forEach(function (label) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'chip';
      b.textContent = label;
      box.appendChild(b);
    });
  }

  // ---------- drawer ----------

  var drawer = $('#drawer');
  var hasDialog = typeof drawer.showModal === 'function';
  var lastFocus = null;

  function openCat(catId, officeIdx) {
    var c = D.categories.filter(function (x) { return x.id === catId; })[0];
    if (!c) return;
    $('#drawerTitle').textContent = t(c.title);
    var html = '<p class="drawer__lead">' + esc(t(c.summary)) + '</p>';
    if (c.link) {
      html += '<a class="btn" href="' + c.link.url + '" target="_blank" rel="noopener">' + esc(t(c.link.label)) + newTabHint() + icon('ext', 18) + '</a>';
    }
    html += c.offices.map(function (o, i) {
      var phones = '';
      if (o.directPhone) {
        phones += '<p class="office__call"><span class="dir__lbl">' + esc(ui('directLine')) + '</span><a href="' + telHref(o.directPhone) + '">' + o.directPhone + '</a></p>';
      }
      if (o.ext.length) {
        phones += '<p class="office__call"><a href="tel:' + D.phone.tel + '">' + D.phone.display + '</a>' +
          '<span class="dir__lbl">' + esc(ui('ext')) + '</span>' + extLinks(o.ext) + '</p>';
      }
      return '<section class="office" id="office-' + i + '">' +
        '<h3 tabindex="-1">' + esc(t(o.name)) + '</h3>' +
        '<p>' + esc(t(o.about)) + '</p>' +
        '<h4>' + esc(ui('officeServices')) + '</h4>' +
        '<ul class="ticks">' + t(o.services).map(function (s) { return '<li>' + esc(s) + '</li>'; }).join('') + '</ul>' +
        (phones ? '<h4>' + esc(ui('officeCall')) + '</h4>' + phones : '') +
        '</section>';
    }).join('');
    var body = $('#drawerBody');
    body.innerHTML = html;

    lastFocus = document.activeElement;
    if (hasDialog) drawer.showModal(); else drawer.setAttribute('open', '');
    root.classList.add('locked');

    body.scrollTop = 0;
    if (officeIdx != null) {
      var target = $('#office-' + officeIdx, body);
      if (target) {
        target.classList.add('office--hl');
        body.scrollTop = target.offsetTop - body.offsetTop - 8;
        $('h3', target).focus({ preventScroll: true });
      }
    }
  }

  function onDrawerClosed() {
    root.classList.remove('locked');
    if (lastFocus && document.contains(lastFocus)) lastFocus.focus();
  }

  function closeDrawer() {
    if (hasDialog) {
      if (drawer.open) drawer.close();
    } else if (drawer.hasAttribute('open')) {
      drawer.removeAttribute('open');
      onDrawerClosed();
    }
  }

  drawer.addEventListener('close', onDrawerClosed);
  drawer.addEventListener('click', function (e) { if (e.target === drawer) closeDrawer(); });
  $('#drawerClose').addEventListener('click', closeDrawer);
  if (!hasDialog) {
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeDrawer(); });
  }

  document.addEventListener('click', function (e) {
    var el = e.target.closest('[data-cat]');
    if (!el) return;
    var off = el.getAttribute('data-office');
    openCat(el.getAttribute('data-cat'), off == null ? null : +off);
  });

  // ---------- search ----------

  var index = [];

  function allLangs(obj) {
    return LANGS.map(function (l) { return obj[l]; }).join(' ');
  }

  function buildIndex() {
    index = [];
    D.categories.forEach(function (c) {
      var catText = allLangs(c.title) + ' ' + allLangs(c.summary);
      c.offices.forEach(function (o, oi) {
        var names = allLangs(o.name);
        index.push({ kind: 'office', cat: c, office: o, oi: oi, own: norm(names + ' ' + o.keywords), extra: norm(catText) });
        o.services.ru.forEach(function (_, si) {
          var own = LANGS.map(function (l) { return o.services[l][si]; }).join(' ');
          index.push({ kind: 'service', cat: c, office: o, oi: oi, si: si, own: norm(own), extra: norm(names + ' ' + o.keywords) });
        });
      });
    });
    D.online.forEach(function (g) {
      g.items.ru.forEach(function (_, ii) {
        var own = LANGS.map(function (l) { return g.items[l][ii]; }).join(' ');
        index.push({ kind: 'online', group: g, ii: ii, own: norm(own), extra: norm(allLangs(g.title) + ' ' + (g.keywords || '')) });
      });
    });
  }

  var reCache = {};
  function wordRe(stem) {
    if (!reCache[stem]) {
      // совпадение по началу слова: «академ» находит «академический»
      reCache[stem] = new RegExp('(^|[\\s/+-])' + stem.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    }
    return reCache[stem];
  }

  // Отрезаем окончание только у кириллицы: «справку» → «справ», «врача» → «врач».
  function stemOf(w) {
    if (!/[а-яәғқңөұүһі]/.test(w)) return w;
    if (w.length >= 7) return w.slice(0, -2);
    if (w.length >= 5) return w.slice(0, -1);
    return w;
  }

  function search(q) {
    var words = norm(q).split(/\s+/).filter(Boolean);
    if (!words.length) return [];
    var full = words.length * 3;
    var scored = index.map(function (e) {
      var score = 0;
      for (var i = 0; i < words.length; i++) {
        var re = wordRe(stemOf(words[i]));
        if (re.test(e.own)) score += 3;
        else if (re.test(e.extra)) score += 1;
        else return null;
      }
      return { e: e, score: score };
    }).filter(Boolean);

    // Если есть прямые совпадения, не добиваем выдачу «соседями» по офису.
    if (scored.some(function (r) { return r.score === full; })) {
      scored = scored.filter(function (r) { return r.score === full; });
    }
    return scored.sort(function (a, b) {
      return b.score - a.score || (a.e.kind === 'office' ? -1 : 0) - (b.e.kind === 'office' ? -1 : 0);
    }).slice(0, 8).map(function (r) { return r.e; });
  }

  function resultHtml(e) {
    if (e.kind === 'online') {
      return '<li><a class="res" href="' + D.portal + '" target="_blank" rel="noopener">' +
        '<span class="res__title">' + esc(t(e.group.items)[e.ii]) + newTabHint() + '</span>' +
        '<span class="res__meta"><span class="tag tag--online">' + esc(ui('tagOnline')) + '</span><span>' + esc(t(e.group.title)) + ' · univer.kaznu.kz</span></span>' +
        icon('ext', 18) + '</a></li>';
    }
    var title = e.kind === 'office' ? t(e.office.name) : t(e.office.services)[e.si];
    var meta = e.kind === 'office' ? t(e.cat.title) : t(e.office.name);
    var ext = e.office.ext.length ? ' · ' + ui('ext') + ' ' + e.office.ext[0] : '';
    return '<li><button type="button" class="res" data-cat="' + e.cat.id + '" data-office="' + e.oi + '" aria-haspopup="dialog">' +
      '<span class="res__title">' + esc(title) + '</span>' +
      '<span class="res__meta"><span class="tag">' + esc(ui('tagOffice')) + '</span><span>' + esc(meta + ext) + '</span></span>' +
      icon('arrow', 18) + '</button></li>';
  }

  var qInput = $('#q');
  var results = $('#results');
  var chips = $('#chips');
  var searchTimer;

  function runSearch() {
    clearTimeout(searchTimer);
    var q = qInput.value.trim();
    $('#qClear').hidden = !q;
    chips.hidden = !!q;
    if (!q) {
      results.hidden = true;
      results.innerHTML = '';
      $('#finderStatus').textContent = '';
      return;
    }
    var found = search(q);
    results.hidden = false;
    if (!found.length) {
      results.innerHTML = '<li class="res-empty">' + esc(ui('noResults', { q: q })) +
        ' <a href="tel:' + D.phone.tel + '">' + D.phone.display + '</a></li>';
    } else {
      results.innerHTML = found.map(resultHtml).join('');
    }
    $('#finderStatus').textContent = ui('resultsCount', { n: found.length });
  }

  qInput.addEventListener('input', function () {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(runSearch, 120);
  });
  $('#finder').addEventListener('submit', function (e) {
    e.preventDefault();
    runSearch();
    var first = $('.res', results);
    if (first) first.focus();
  });
  $('#qClear').addEventListener('click', function () {
    qInput.value = '';
    runSearch();
    qInput.focus();
  });
  chips.addEventListener('click', function (e) {
    var chip = e.target.closest('.chip');
    if (!chip) return;
    qInput.value = chip.textContent;
    runSearch();
    qInput.focus();
  });

  // ---------- form ----------

  var form = $('#appealForm');
  var formDone = $('#formDone');

  function setMsg(el, key, vars) {
    if (key) {
      el.setAttribute('data-msg', key);
      if (vars) el.setAttribute('data-vars', JSON.stringify(vars)); else el.removeAttribute('data-vars');
      el.textContent = ui(key, vars);
    } else {
      el.removeAttribute('data-msg');
      el.removeAttribute('data-vars');
      el.textContent = '';
    }
  }

  function setErr(input, msgKey) {
    input.setAttribute('aria-invalid', msgKey ? 'true' : 'false');
    setMsg($('#' + input.id + 'Err'), msgKey);
    return !msgKey;
  }

  var checks = {
    fName: function (v) { return v ? null : 'fErrName'; },
    fEmail: function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? null : 'fErrEmail'; },
    fMessage: function (v) { return v ? null : 'fErrMessage'; }
  };

  function validate() {
    var ok = Object.keys(checks).map(function (id) {
      var input = $('#' + id);
      return setErr(input, checks[id](input.value.trim()));
    });
    if (ok.indexOf(false) > -1) {
      var firstBad = $('[aria-invalid="true"]', form);
      if (firstBad) firstBad.focus();
      return false;
    }
    return true;
  }

  // ошибка исчезает, как только поле исправлено
  Object.keys(checks).forEach(function (id) {
    var input = $('#' + id);
    input.addEventListener('input', function () {
      if (input.getAttribute('aria-invalid') === 'true' && !checks[id](input.value.trim())) setErr(input, null);
    });
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    setMsg(formDone, null);
    if (!validate()) return;
    // Концепт: данные никуда не уходят.
    var key = $('#fTopic').value === '' ? 'fDoneAny' : 'fDone';
    setMsg(formDone, key, { email: $('#fEmail').value.trim() });
    form.reset();
  });

  // ---------- header, menu, banner ----------

  var header = $('#top');
  var burger = $('#burger');

  function setMenu(open) {
    header.classList.toggle('top--open', open);
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', ui(open ? 'close' : 'menu'));
    $('use', burger).setAttribute('href', open ? '#i-x' : '#i-menu');
  }
  burger.addEventListener('click', function () {
    var open = !header.classList.contains('top--open');
    setMenu(open);
    if (open) $('#nav a').focus();
  });
  $$('#nav a').forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && header.classList.contains('top--open')) { setMenu(false); burger.focus(); }
  });
  document.addEventListener('click', function (e) {
    if (header.classList.contains('top--open') && !header.contains(e.target)) setMenu(false);
  });

  $('#conceptClose').addEventListener('click', function () {
    root.classList.add('concept-off');
    try { sessionStorage.setItem('keremet-concept', 'hidden'); } catch (e) { /* ничего */ }
    $('.brand').focus();
  });

  $$('.langs button').forEach(function (b) {
    b.addEventListener('click', function () { setLang(b.getAttribute('data-lang')); });
  });

  $('#year').textContent = new Date().getFullYear();
  $('#faculty').addEventListener('change', renderFacultyOut);

  // ---------- language ----------

  function renderAll() {
    applyStatic();
    renderCats();
    renderOnline();
    renderFaculties();
    renderDirectory();
    renderCampus();
    renderTopics();
    renderFooter();
    renderChips();
    if (qInput.value.trim()) runSearch();
    setMenu(header.classList.contains('top--open'));
    root.classList.remove('i18n-pending');
  }

  function setLang(next) {
    if (LANGS.indexOf(next) < 0 || next === lang) return;
    lang = next;
    store('keremet-lang', lang);
    try {
      var url = new URL(location.href);
      url.searchParams.set('lang', lang);
      history.replaceState(null, '', url);
    } catch (e) { /* в песочнице без history — просто не меняем адрес */ }
    closeDrawer();
    renderAll();
  }

  buildIndex();
  renderAll();
})();
