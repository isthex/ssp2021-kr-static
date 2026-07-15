// 미환급금 조회 — 정적 안내 페이지 (공유 + 사이드바)
document.addEventListener('DOMContentLoaded', () => {
  if (typeof initSidebar === 'function') initSidebar({ relatedTools: ['health-refund', 'eitc-grant', 'jongso-tax', '20_year-end-tax-preview'] });
  const share = document.getElementById('btn-share');
  if (share) share.addEventListener('click', handleShare);
});

async function handleShare() {
  const data = {
    title: '미환급금 조회 2026 · 국세·지방세·건강보험 통합조회',
    text: '잠자고 있는 내 환급금, 정부24·홈택스·위택스에서 한 번에 확인하세요.',
    url: 'https://refund.ssp2021.kr/',
  };
  try {
    if (navigator.share) await navigator.share(data);
    else { await navigator.clipboard.writeText(data.url); showToast('링크가 복사되었습니다.'); }
  } catch (e) { if (e.name !== 'AbortError') showToast('주소창의 링크를 복사해 주세요.'); }
}

function showToast(msg) {
  const old = document.querySelector('.share-toast');
  if (old) old.remove();
  const t = document.createElement('div');
  t.className = 'share-toast';
  t.textContent = msg;
  document.body.appendChild(t);
  requestAnimationFrame(() => t.classList.add('show'));
  setTimeout(() => { t.classList.remove('show'); setTimeout(() => t.remove(), 250); }, 2200);
}
