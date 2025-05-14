import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(
    private meta: Meta,
    private router: Router
  ) { }

  /**
   * Update meta tags for SEO
   * @param config - SEO configuration object
   */
  updateMetaTags(config: {
    title?: string,
    description?: string,
    keywords?: string,
    image?: string
  }): void {
    // Default values
    const title = config.title || 'Meghan A Miller, Esq. | Arizona Family Law Attorney';
    const description = config.description || 'Arizona Family Law Attorney Meghan A Miller offers expert legal counsel for divorce, child custody, support, and all family law matters. Schedule a consultation today.';
    const keywords = config.keywords || 'family law, divorce lawyer, child custody attorney, Arizona family law, Meghan Miller, family attorney, legal services';
    const image = config.image || 'https://milleresq.com/assets/meghan-miller-esq.jpg';

    // Update meta tags
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ name: 'keywords', content: keywords });
    
    // Open Graph
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:url', content: `https://milleresq.com${this.router.url}` });
    this.meta.updateTag({ property: 'og:image', content: image });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    
    // Twitter
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: title });
    this.meta.updateTag({ name: 'twitter:description', content: description });
    this.meta.updateTag({ name: 'twitter:image', content: image });
  }

  /**
   * Create canonical link
   */
  createCanonicalLink(): void {
    // Remove any existing canonical link
    const existingCanonicalLink = document.querySelector('link[rel="canonical"]');
    if (existingCanonicalLink) {
      document.head.removeChild(existingCanonicalLink);
    }

    // Create new canonical link
    const canonicalLink = document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    canonicalLink.setAttribute('href', `https://milleresq.com${this.router.url}`);
    document.head.appendChild(canonicalLink);
  }
}
