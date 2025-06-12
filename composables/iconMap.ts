import type { Component } from "vue";

import IconHtml from "@/components/icon/skills-logo/Html.vue";
import IconCss from "@/components/icon/skills-logo/Css.vue";
import IconJavascript from "@/components/icon/skills-logo/Javascript.vue";
import IconTypescript from "@/components/icon/skills-logo/TypeScript.vue";
import IconVue from "@/components/icon/skills-logo/Vue.vue";
import IconNuxt from "@/components/icon/skills-logo/Nuxt.vue";
import IconVuetify from "@/components/icon/skills-logo/Vuetify.vue";
import IconReact from "@/components/icon/skills-logo/React.vue";
import IconMaterialUi from "@/components/icon/skills-logo/MaterialUi.vue";
import IconStyledComponents from "@/components/icon/skills-logo/StyledComponents.vue";
import IconTailwind from "@/components/icon/skills-logo/Tailwind.vue";
import IconSass from "@/components/icon/skills-logo/Sass.vue";
import IconGit from "@/components/icon/skills-logo/Git.vue";
import IconBootstrap from "@/components/icon/skills-logo/Bootstrap5.vue";
import IconJest from "@/components/icon/skills-logo/Jest.vue";
import IconCypress from "@/components/icon/skills-logo/Cypress.vue";
import IconFirebase from "@/components/icon/skills-logo/Firebase.vue";
import IconNode from "@/components/icon/skills-logo/Node.vue";
import IconJava from "@/components/icon/skills-logo/Java.vue";
import IconKotlin from "@/components/icon/skills-logo/Kotlin.vue";
import IconAndroid from "@/components/icon/skills-logo/Android.vue";
import IconSql from "@/components/icon/skills-logo/Sql.vue";
import IconSqlite from "@/components/icon/skills-logo/Sqlite.vue";
import IconPostgreSQL from "@/components/icon/skills-logo/PostgreSQL.vue";
import IconCSharp from "@/components/icon/skills-logo/CSharp.vue";
import IconDotNet from "@/components/icon/skills-logo/DotNet.vue";
import IconLaravel from "@/components/icon/skills-logo/Laravel.vue";

export const iconMap: Record<string, Component> = {
  HTML: IconHtml,
  CSS: IconCss,
  JavaScript: IconJavascript,
  TypeScript: IconTypescript,
  "Vue.js": IconVue,
  "Nuxt.js": IconNuxt,
  Vuetify: IconVuetify,
  "React.js": IconReact,
  "Material UI": IconMaterialUi,
  "Styled Components": IconStyledComponents,
  Tailwind: IconTailwind,
  SASS: IconSass,
  Git: IconGit,
  Bootstrap: IconBootstrap,
  Jest: IconJest,
  Cypress: IconCypress,
  Firebase: IconFirebase,
  "Node.js": IconNode,
  Java: IconJava,
  Kotlin: IconKotlin,
  Android: IconAndroid,
  SQL: IconSql,
  SQLite: IconSqlite,
  PostgreSQL: IconPostgreSQL,
  "C#": IconCSharp,
  ".NET Framework": IconDotNet,
  Laravel: IconLaravel,
};
