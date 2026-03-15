/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Package {
  id: string;
  name: string;
  priceRange: string;
  description: string;
  images: string[];
}

export interface Service {
  id: string;
  title: string;
  banglaTitle?: string;
  description: string;
  image: string;
  images: string[];
  packages: Package[];
}

export interface BusinessInfo {
  name: string;
  owner: string;
  phones: string[];
  whatsapp: string;
  email: string;
  facebook: string;
}
