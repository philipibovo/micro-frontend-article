import { registerApplication, start, LifeCycles } from "single-spa";

registerApplication({
  name: "@article/app-menu",
  app: () => System.import<LifeCycles>("@article/app-menu"),
  activeWhen: ["/", "/cadastros", "/relatorios"],
});

registerApplication({
  name: "@article/app-registers",
  app: () => System.import<LifeCycles>("@article/app-registers"),
  activeWhen: ["/cadastros"],
});

registerApplication({
  name: "@article/app-reports",
  app: () => System.import<LifeCycles>("@article/app-reports"),
  activeWhen: ["/relatorios"],
});

start({
  urlRerouteOnly: true,
});
