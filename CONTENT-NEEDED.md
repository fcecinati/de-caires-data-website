# Content needed from Francesca

Running list of material still required to finish the site. Tick items off as they arrive.

## Branding
Rebranded from Opotus to De Caires Data: one company, one brand, across both
the classics and the data side. The visual language is the De Caires Classics
house style inverted — black and gold on white, instead of cream and gold on
black — with the same Cormorant Garamond / DM Sans pairing and the same gold
hairlines. The coral accent is gone entirely.

- [x] Palette inverted from the Classics board: ink `#0A0A0A`, ground `#FFFFFF`, cream band `#F5F0E8`, gold rules `#B8960C`. Gold *text* uses a deeper bronze `#7E6400`, because `#B8960C` only reaches 2.8:1 on white and fails contrast; the bronze reaches 5.7:1 on white and 5.0:1 on the cream.
- [x] Typography matched to Classics exactly: Cormorant Garamond (300) for headings, DM Sans (400/500) for body and micro-type
- [x] Wordmark logo wired into the nav, hero and footer on all six pages
- [x] Square DC monogram wired into the favicon and the iOS home-screen icon on all six pages. The wordmark is roughly 5:1 and would have been an illegible smudge at 16px; the monogram stays readable.
- [x] Brand assets in place in `images/`, copied from the master kit at
  `Business Management/Marketing/Logo/Logo version 2/`. Filenames are the kit's
  own, so a future re-export drops straight in:

  | File | Used for |
  | --- | --- |
  | `DeCaires_Data_logo_black_transparent.png` | nav, hero, footer (1164×271) |
  | `DC_icon_32_black-on-white.png` | favicon |
  | `DC_icon_48_black-on-white.png` | favicon |
  | `DC_icon_180_black-on-white.png` | iOS home-screen icon |
  | `DeCaires_Data_logo_white_transparent.png` | held for any dark placement |
  | `DeCaires_Data_logo_black-on-white.png` | held |
  | `DC_icon_48_black_transparent.png` | held |

- [ ] **Note on `DC_icon_kit/DC_favicon.ico`:** deliberately not used. Despite
  sitting in a kit whose other files are named by variant, the `.ico` is the
  *white-on-black* monogram — decoding it gives black corners and a peak
  brightness of 209. Using it would put a black tile in the browser tab,
  against a site that is otherwise black-on-white. The PNG icon set is wired
  up instead. Worth regenerating the `.ico` from the black-on-white PNGs if
  you want a single-file favicon, since `.ico` still has the widest support.
- [ ] `images/opotus-logo.png` is now unreferenced and can be deleted

## Copy and facts
- [ ] Review of the one-line value proposition on the homepage
- [ ] Review of draft service descriptions (consulting, water, digital)
- [ ] Real credibility numbers: years of experience, number of projects, number of publications
- [ ] Bio and CV highlights for the About page
- [ ] Publication list (or a link to Google Scholar / ORCID)
- [ ] Case study material for consulting and water pages (anonymised is fine)
- [ ] Portfolio screenshots and links for the digital page (De Caires Classics and others)

## Contact details
- [ ] De Caires Data email address
- [ ] LinkedIn URL
- [ ] WhatsApp number for the wa.me link

## Images
- [x] Photo of Francesca for the About page (`images/francesca.png`)
- [ ] Portfolio screenshot(s) of De Caires Classics (and any other sites) for the digital.html "Recent work" cards
- [ ] Optional: sector/project photos for the water and consulting pages, if you want something more concrete than the current text-only layout there
- [ ] Any project or sector photos (drop originals in images/Raw/)

## Italian
- [ ] Review of the draft Italian translations in js/i18n.js
