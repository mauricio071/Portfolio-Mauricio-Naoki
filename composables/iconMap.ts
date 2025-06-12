const lazy = (path: string) =>
  defineAsyncComponent(
    () => import(`@/components/icon/skills-logo/${path}.vue`)
  );

export const iconMap: Record<string, Component> = {
  HTML: lazy("Html"),
  CSS: lazy("Css"),
  JavaScript: lazy("Javascript"),
  TypeScript: lazy("TypeScript"),
  "Vue.js": lazy("Vue"),
  "Nuxt.js": lazy("Nuxt"),
  Vuetify: lazy("Vuetify"),
  "React.js": lazy("React"),
  "Material UI": lazy("MaterialUi"),
  "Styled Components": lazy("StyledComponents"),
  Tailwind: lazy("Tailwind"),
  SASS: lazy("Sass"),
  Git: lazy("Git"),
  Bootstrap: lazy("Bootstrap5"),
  Jest: lazy("Jest"),
  Cypress: lazy("Cypress"),
  Firebase: lazy("Firebase"),
  "Node.js": lazy("Node"),
  Java: lazy("Java"),
  Kotlin: lazy("Kotlin"),
  Android: lazy("Android"),
  SQL: lazy("Sql"),
  SQLite: lazy("Sqlite"),
  PostgreSQL: lazy("PostgreSQL"),
  "C#": lazy("CSharp"),
  ".NET Framework": lazy("DotNet"),
  Laravel: lazy("Laravel"),
};
