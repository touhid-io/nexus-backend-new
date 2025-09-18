import type { Schema, Struct } from '@strapi/strapi';

export interface ProductGalleryImage extends Struct.ComponentSchema {
  collectionName: 'components_product_gallery_images';
  info: {
    displayName: 'GalleryImage';
  };
  attributes: {
    gallary_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface ProductSpecification extends Struct.ComponentSchema {
  collectionName: 'components_product_specifications';
  info: {
    displayName: 'Specification';
  };
  attributes: {
    spec_name: Schema.Attribute.String;
    spec_value: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'product.gallery-image': ProductGalleryImage;
      'product.specification': ProductSpecification;
    }
  }
}
