import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      tagline: z.string(),
      // 顶层大区
      domain: z.enum(["life", "work"]),
      // 子区类型
      category: z.enum(["agent", "system", "skill"]),
      role: z.string(),
      status: z.string(),
      problem: z.string(),
      aiCapability: z.string(),
      techStack: z.array(z.string()).default([]),
      metrics: z
        .array(z.object({ value: z.string(), label: z.string() }))
        .default([]),
      links: z
        .object({
          live: z.string().optional(),
          github: z.string().optional(),
          demo: z.string().optional(),
          download: z.string().optional(),
          read: z.string().optional(),
        })
        .default({}),
      cover: image().optional(),
      // 标题下并排的品牌概念卡（用于无截图封面的项目，如生活类两个 Agent）
      heroCards: z
        .array(
          z.object({
            emoji: z.string(),
            title: z.string(),
            subtitle: z.string(),
          }),
        )
        .default([]),
      gallery: z
        .array(z.object({ src: image(), caption: z.string().optional() }))
        .default([]),
      // 多份可在线阅读的报告示例（如财报项目的 PDD / 阿里）
      reports: z
        .array(
          z.object({
            label: z.string(),
            cover: image(),
            read: z.string(),
            download: z.string().optional(),
          }),
        )
        .default([]),
      featured: z.boolean().default(false),
      order: z.number().default(99),
    }),
});

export const collections = { projects };
