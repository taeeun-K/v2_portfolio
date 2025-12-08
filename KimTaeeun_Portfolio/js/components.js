document.addEventListener('DOMContentLoaded', async function() {
  const includePages = document.querySelectorAll('[data-include]');

  for (const target of includePages) {
    const files = target.getAttribute('data-include');

    try {
      const res = await fetch(files);
      if (!res.ok) throw new Error(`Failed to load: ${files}`);

      const html = await res.text();
      target.innerHTML = html;

    } catch (error) {
      console.error(error);
      target.innerHTML = `<p style="color:red;">${files} 로드 실패</p>`;
    }
  }
});