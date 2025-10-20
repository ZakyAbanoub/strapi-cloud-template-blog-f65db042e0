import type { Schema, Struct } from '@strapi/strapi';

export interface SharedBenefitItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_benefit_items';
  info: {
    displayName: 'Benefit Item';
    icon: 'feather';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    icon: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedBenefits extends Struct.ComponentSchema {
  collectionName: 'components_shared_benefits';
  info: {
    displayName: 'Benefits';
    icon: 'thumbUp';
  };
  attributes: {
    benefits: Schema.Attribute.Component<'shared.benefit-item', true>;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    subheading: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedContactUs extends Struct.ComponentSchema {
  collectionName: 'components_shared_contact_uses';
  info: {
    displayName: 'Contact Us';
    icon: 'phone';
  };
  attributes: {
    contactMethods: Schema.Attribute.Component<
      'shared.single-contact-method',
      true
    > &
      Schema.Attribute.Required;
    heading: Schema.Attribute.Blocks & Schema.Attribute.Required;
    officeHours: Schema.Attribute.Component<'shared.office-hours', true>;
    subheading: Schema.Attribute.Blocks & Schema.Attribute.Required;
    trustedPartners: Schema.Attribute.Component<
      'shared.trusted-partners',
      false
    > &
      Schema.Attribute.Required;
  };
}

export interface SharedCta extends Struct.ComponentSchema {
  collectionName: 'components_shared_ctas';
  info: {
    displayName: 'CTA';
    icon: 'cursor';
  };
  attributes: {
    ariaLabel: Schema.Attribute.String;
    icon: Schema.Attribute.String;
    label: Schema.Attribute.String;
    link: Schema.Attribute.Component<'shared.link', false>;
  };
}

export interface SharedFaq extends Struct.ComponentSchema {
  collectionName: 'components_shared_faqs';
  info: {
    displayName: 'FAQ';
    icon: 'cursor';
  };
  attributes: {
    faqs: Schema.Attribute.Component<'shared.single-faq', true>;
    heading: Schema.Attribute.Blocks & Schema.Attribute.Required;
    subheading: Schema.Attribute.Blocks & Schema.Attribute.Required;
  };
}

export interface SharedHero extends Struct.ComponentSchema {
  collectionName: 'components_shared_heroes';
  info: {
    displayName: 'Hero';
    icon: 'arrowUp';
  };
  attributes: {
    cta: Schema.Attribute.Component<'shared.cta', false>;
    heading: Schema.Attribute.Blocks & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    subheading: Schema.Attribute.Blocks & Schema.Attribute.Required;
  };
}

export interface SharedKpi extends Struct.ComponentSchema {
  collectionName: 'components_shared_kpis';
  info: {
    displayName: 'KPI';
    icon: 'crown';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    value: Schema.Attribute.String;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'Link';
    icon: 'attachment';
  };
  attributes: {
    href: Schema.Attribute.String;
    label: Schema.Attribute.String;
    target: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedOffers extends Struct.ComponentSchema {
  collectionName: 'components_shared_offers';
  info: {
    displayName: 'Offers';
    icon: 'rocket';
  };
  attributes: {
    heading: Schema.Attribute.Blocks & Schema.Attribute.Required;
    offers: Schema.Attribute.Component<'shared.single-offer', true>;
    subheading: Schema.Attribute.Blocks & Schema.Attribute.Required;
  };
}

export interface SharedOfficeHours extends Struct.ComponentSchema {
  collectionName: 'components_shared_office_hours';
  info: {
    displayName: 'Office Hours';
    icon: 'clock';
  };
  attributes: {
    key: Schema.Attribute.String & Schema.Attribute.Required;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedPoint extends Struct.ComponentSchema {
  collectionName: 'components_shared_points';
  info: {
    displayName: 'Point';
    icon: 'bulletList';
  };
  attributes: {
    icon: Schema.Attribute.String & Schema.Attribute.Required;
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSaving extends Struct.ComponentSchema {
  collectionName: 'components_shared_savings';
  info: {
    displayName: 'Saving';
    icon: 'scissors';
  };
  attributes: {
    cta: Schema.Attribute.Component<'shared.cta', false> &
      Schema.Attribute.Required;
    heading: Schema.Attribute.Blocks & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images', true> & Schema.Attribute.Required;
    kpi: Schema.Attribute.Component<'shared.kpi', false> &
      Schema.Attribute.Required;
    points: Schema.Attribute.Component<'shared.point', true>;
    subheading: Schema.Attribute.Blocks & Schema.Attribute.Required;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSingleContactMethod extends Struct.ComponentSchema {
  collectionName: 'components_shared_single_contact_methods';
  info: {
    displayName: 'Single Contact Method';
    icon: 'paperPlane';
  };
  attributes: {
    helper: Schema.Attribute.String & Schema.Attribute.Required;
    icon: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedSingleFaq extends Struct.ComponentSchema {
  collectionName: 'components_shared_single_faqs';
  info: {
    displayName: 'Single FAQ';
    icon: 'magic';
  };
  attributes: {
    answer: Schema.Attribute.Text & Schema.Attribute.Required;
    question: Schema.Attribute.String & Schema.Attribute.Required;
    type: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedSingleOffer extends Struct.ComponentSchema {
  collectionName: 'components_shared_single_offers';
  info: {
    displayName: 'Single Offer';
    icon: 'music';
  };
  attributes: {
    image: Schema.Attribute.Media<'images', true> & Schema.Attribute.Required;
    subtitle: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedSinglePartner extends Struct.ComponentSchema {
  collectionName: 'components_shared_single_partners';
  info: {
    displayName: 'Single Partner';
    icon: 'user';
  };
  attributes: {
    subtitle: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedSingleTestimonialItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_single_testimonial_items';
  info: {
    displayName: 'Single Testimonial item';
    icon: 'handHeart';
  };
  attributes: {
    handle: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    quote: Schema.Attribute.String & Schema.Attribute.Required;
    socialImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedStartSaving extends Struct.ComponentSchema {
  collectionName: 'components_shared_start_savings';
  info: {
    displayName: 'Start Saving';
    icon: 'seed';
  };
  attributes: {
    cta: Schema.Attribute.Component<'shared.cta', false>;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images', true> & Schema.Attribute.Required;
    subheading: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface SharedTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_shared_testimonials';
  info: {
    displayName: 'Testimonials';
    icon: 'volumeUp';
  };
  attributes: {
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    items: Schema.Attribute.Component<'shared.single-testimonial-item', true>;
    subheading: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedTrustedPartners extends Struct.ComponentSchema {
  collectionName: 'components_shared_trusted_partners';
  info: {
    displayName: 'Trusted Partners';
    icon: 'check';
  };
  attributes: {
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    items: Schema.Attribute.Component<'shared.single-partner', true> &
      Schema.Attribute.Required;
    note: Schema.Attribute.Text & Schema.Attribute.Required;
    tagline: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.benefit-item': SharedBenefitItem;
      'shared.benefits': SharedBenefits;
      'shared.contact-us': SharedContactUs;
      'shared.cta': SharedCta;
      'shared.faq': SharedFaq;
      'shared.hero': SharedHero;
      'shared.kpi': SharedKpi;
      'shared.link': SharedLink;
      'shared.media': SharedMedia;
      'shared.offers': SharedOffers;
      'shared.office-hours': SharedOfficeHours;
      'shared.point': SharedPoint;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.saving': SharedSaving;
      'shared.seo': SharedSeo;
      'shared.single-contact-method': SharedSingleContactMethod;
      'shared.single-faq': SharedSingleFaq;
      'shared.single-offer': SharedSingleOffer;
      'shared.single-partner': SharedSinglePartner;
      'shared.single-testimonial-item': SharedSingleTestimonialItem;
      'shared.slider': SharedSlider;
      'shared.start-saving': SharedStartSaving;
      'shared.testimonials': SharedTestimonials;
      'shared.trusted-partners': SharedTrustedPartners;
    }
  }
}
