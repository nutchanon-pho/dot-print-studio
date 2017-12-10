/*
 *
 * ProductConfigurationPage constants
 *
 */

export const DEFAULT_ACTION = 'app/ProductConfigurationPage/DEFAULT_ACTION';
export const UPDATE_FORM = 'app/ProductConfigurationPage/UPDATE_FORM';

export const productTypeOptions = [
    { key: 'poster', text: 'Poster', value: 'Poster' },
    { key: 'canvas', text: 'Canvas', value: 'Canvas' },
];

export const layoutOptions = [
    { key: 'portrait', text: 'Portrait', value: 'portrait' },
    { key: 'landscape', text: 'Landscape', value: 'landscape' },
];

export const sizeOptions = [
    { key: 'a1', text: 'A1', value: 'A1' },
    { key: 'a2', text: 'A2', value: 'A2' },
    { key: 'a3', text: 'A3', value: 'A3' },
];

export const posterPaperTypeOptions = [
    { key: '1', text: 'Coated Matte 120g', value: 'Coated Matte 120g' },
    { key: '2', text: 'Coated Matte 200g', value: 'Coated Matte 200g' },
    { key: '3', text: 'Semi Gloss', value: 'Semi Gloss' },
];

export const paperSizeInfoMap = {
  A1: { aspectRatio: { portrait: 594.0 / 891.0, landscape: 891.0 / 594.0 }, width: { portrait: 594.0, landscape: 891.0 } },
  A2: { aspectRatio: { portrait: 420.0 / 594.0, landscape: 594.0 / 420.0 }, width: { portrait: 420.0, landscape: 594.0 } },
  A3: { aspectRatio: { portrait: 297.0 / 420.0, landscape: 420.0 / 297.0 }, width: { portrait: 297.0, landscape: 420.0 } },
  A4: { aspectRatio: { portrait: 210.0 / 297.0, landscape: 297.0 / 210.0 }, width: { portrait: 210.0, landscape: 297.0 } },
};
