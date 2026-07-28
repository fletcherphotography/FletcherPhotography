import type { StructureResolver } from "sanity/structure";
import { portfolioTaxonomy, testimonialPeople, reviewPeople } from "./portfolioTaxonomy";

function photoList(S: Parameters<StructureResolver>[0], title: string, filter: string, params: Record<string, unknown>, templateId: string) {
  return S.documentList()
    .title(title)
    .schemaType("photo")
    .filter(filter)
    .params(params)
    .initialValueTemplates([S.initialValueTemplateItem(templateId)]);
}

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Home page")
        .child(
          S.list()
            .title("Home page")
            .items([
              S.listItem()
                .title("Hero image")
                .child(
                  photoList(S, "Hero image", '_type == "photo" && slot == "hero"', {}, "photo-hero")
                ),
              S.listItem()
                .title("Gallery photos (after intro)")
                .child(
                  photoList(
                    S,
                    "Gallery photos",
                    '_type == "photo" && slot == "home-gallery"',
                    {},
                    "photo-home-gallery"
                  )
                ),
              S.listItem()
                .title("Testimonials")
                .child(
                  S.list()
                    .title("Testimonials")
                    .items(
                      testimonialPeople.map((p) =>
                        S.listItem()
                          .title(p.name)
                          .child(
                            photoList(
                              S,
                              p.name,
                              '_type == "photo" && slot == "testimonial" && personId == $personId',
                              { personId: p.id },
                              `photo-testimonial-${p.id}`
                            )
                          )
                      )
                    )
                ),
              S.listItem()
                .title("Brand logos")
                .child(
                  photoList(S, "Brand logos", '_type == "photo" && slot == "logo"', {}, "photo-logo")
                ),
            ])
        ),
      S.listItem()
        .title("About page")
        .child(
          S.list()
            .title("About page")
            .items([
              S.listItem()
                .title("Portrait")
                .child(
                  photoList(
                    S,
                    "Portrait",
                    '_type == "photo" && slot == "about-portrait"',
                    {},
                    "photo-about-portrait"
                  )
                ),
              S.listItem()
                .title("Behind the scenes")
                .child(
                  photoList(
                    S,
                    "Behind the scenes",
                    '_type == "photo" && slot == "about-bts"',
                    {},
                    "photo-about-bts"
                  )
                ),
            ])
        ),
      S.listItem()
        .title("Reviews page")
        .child(
          S.list()
            .title("Reviews page")
            .items(
              reviewPeople.map((p) =>
                S.listItem()
                  .title(p.name)
                  .child(
                    photoList(
                      S,
                      p.name,
                      '_type == "photo" && slot == "review" && personId == $personId',
                      { personId: p.id },
                      `photo-review-${p.id}`
                    )
                  )
              )
            )
        ),
      S.listItem()
        .title("Portfolio")
        .child(
          S.list()
            .title("Portfolio")
            .items(
              portfolioTaxonomy.map((category) =>
                S.listItem()
                  .title(category.title)
                  .child(
                    S.list()
                      .title(category.title)
                      .items(
                        category.subcategories.map((sub) =>
                          S.listItem()
                            .title(sub.title)
                            .child(
                              photoList(
                                S,
                                sub.title,
                                '_type == "photo" && slot == "portfolio" && category == $category && subcategory == $subcategory',
                                { category: category.slug, subcategory: sub.slug },
                                `photo-portfolio-${category.slug}-${sub.slug}`
                              )
                            )
                        )
                      )
                  )
              )
            )
        ),
    ]);
