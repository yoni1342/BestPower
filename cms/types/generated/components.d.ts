import type { Schema, Attribute } from '@strapi/strapi';

export interface ProductProduct extends Schema.Component {
  collectionName: 'components_product_products';
  info: {
    displayName: 'Product';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    description: Attribute.RichText & Attribute.Required;
    images: Attribute.Media;
  };
}

export interface ServiceService extends Schema.Component {
  collectionName: 'components_service_services';
  info: {
    displayName: 'Service';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    image: Attribute.Media;
    description: Attribute.RichText & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'product.product': ProductProduct;
      'service.service': ServiceService;
    }
  }
}
