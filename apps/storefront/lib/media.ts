import { notNullable } from "@/lib/util";
import {
  ProductDetailsFragment,
  ProductVariantDetailsFragment,
} from "@/saleor/api";

/**
 * If a variant has been selected by the user and this variant has media, return only those items.
 * Otherwise, all product media are returned.
 * @param product  The product object
 * @param selectedVariant   The selected variant object
 */

export const getGalleryMedia = ({
  product,
  selectedVariant,
}: {
  product: ProductDetailsFragment;
  selectedVariant?: ProductVariantDetailsFragment;
}) => {
  if (selectedVariant && selectedVariant.media?.length !== 0)
    return selectedVariant.media?.filter(notNullable) || [];
  return product?.media?.filter(notNullable) || [];
};

export const getYouTubeIDFromURL = (url: string) => {
  var regExp =
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  var match = url.match(regExp);
  return match && match[7].length == 11 ? match[7] : undefined;
};

export const getVideoThumbnail = (videoUrl: string) => {
  return `https://img.youtube.com/vi/${getYouTubeIDFromURL(
    videoUrl
  )}/maxresdefault.jpg`;
};
