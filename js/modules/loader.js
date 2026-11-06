export async function loadComponents() {
  const components = [
    { id: 'layout-header', url: 'layout/header.html' },
    { id: 'section-hero', url: 'sections/hero.html' },
    { id: 'section-about', url: 'sections/about.html' },
    { id: 'section-services', url: 'sections/services.html' },
    { id: 'section-clients', url: 'sections/clients.html' },
    { id: 'section-contact', url: 'sections/contact.html' },
    { id: 'layout-footer', url: 'layout/footer.html' }
  ];

  // Carrega todos simultaneamente
  const promises = components.map(async (comp) => {
    try {
      const response = await fetch(comp.url);
      if (!response.ok) throw new Error(`Erro ao carregar ${comp.url}`);
      const html = await response.text();
      document.getElementById(comp.id).innerHTML = html;
    } catch (error) {
      console.error(error);
    }
  });

  await Promise.all(promises);
}