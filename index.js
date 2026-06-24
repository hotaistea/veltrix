// Показ герцовки при выборе "Монитор"
document.addEventListener('click', function(e) {
  const option = e.target.closest('.calc-option');
  if (!option) return;

  const parent = option.closest('[data-key="peripherals"]');
  if (!parent) return;

  const monitorSub = document.getElementById('monitorSub');
  // Небольшая задержка, чтобы класс selected успел обновиться
  setTimeout(() => {
    const monitorSelected = [...parent.querySelectorAll('.calc-option.selected')]
      .some(el => el.dataset.val === 'Монитор');
    monitorSub.style.display = monitorSelected ? 'block' : 'none';

    // Если выбрали "Не нужно" — снимаем остальные
    if (option.dataset.val === 'Не нужно' && option.classList.contains('selected')) {
      parent.querySelectorAll('.calc-option').forEach(el => {
        if (el.dataset.val !== 'Не нужно') el.classList.remove('selected');
      });
      monitorSub.style.display = 'none';
    }

    // Если выбрали другое — снимаем "Не нужно"
    if (option.dataset.val !== 'Не нужно' && option.classList.contains('selected')) {
      const noNeed = parent.querySelector('[data-val="Не нужно"]');
      if (noNeed) noNeed.classList.remove('selected');
    }
  }, 10);
});