import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../core/services/seo.service';
import { BlogPost } from '../../core/models/blog-post.model';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule, 
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    DatePipe
  ]
})
export class BlogComponent implements OnInit {
  blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'Understanding Child Custody Laws in Arizona',
      slug: 'understanding-child-custody-laws-arizona',
      summary: 'Learn about the different types of custody arrangements in Arizona and how courts determine the best interests of the child.',
      content: '',
      author: 'Meghan A. Miller, Esq.',
      date: '2023-11-15',
      category: 'Child Custody',
      tags: ['Child Custody', 'Family Law', 'Legal Decision-Making'],
      imageUrl: 'https://pixabay.com/get/g44f5a2050942e92b053f0a7b39e4a35b62b0e73e31c36d8c30db8d245dc12076729c9f142a19ae2709e8045010259cf0121b998b811f5695497f16fcbb0a6d6a_1280.jpg'
    },
    {
      id: 2,
      title: 'The Divorce Process in Arizona: What to Expect',
      slug: 'divorce-process-arizona-what-to-expect',
      summary: 'A step-by-step guide to the divorce process in Arizona, from filing the petition to finalizing the decree.',
      content: '',
      author: 'Meghan A. Miller, Esq.',
      date: '2023-10-22',
      category: 'Divorce',
      tags: ['Divorce', 'Family Law', 'Legal Process'],
      imageUrl: 'https://pixabay.com/get/gb63064cf652720e3939ac03c32135a56c92dcfa437d1e87de1f4f2a9ead280cdab286bbe6b8867060872d8472903c88ef80c589fcd348f064c04029a570bb463_1280.jpg'
    },
    {
      id: 3,
      title: 'How Child Support is Calculated in Arizona',
      slug: 'how-child-support-calculated-arizona',
      summary: 'An explanation of Arizona\'s child support guidelines and the factors that influence support calculations.',
      content: '',
      author: 'Meghan A. Miller, Esq.',
      date: '2023-09-18',
      category: 'Child Support',
      tags: ['Child Support', 'Family Law', 'Financial Obligations'],
      imageUrl: 'https://pixabay.com/get/g71bddc5db2663bc19150967dec270dbd9fbc0c2b7096b9479526e326f77a62811a41945c314ab29257095c84ea802a28bb8efd2885f120f7454306756524ef41_1280.jpg'
    },
    {
      id: 4,
      title: 'Navigating Property Division During Divorce',
      slug: 'navigating-property-division-during-divorce',
      summary: 'Understanding Arizona\'s community property laws and how assets and debts are typically divided in divorce.',
      content: '',
      author: 'Meghan A. Miller, Esq.',
      date: '2023-08-05',
      category: 'Property Division',
      tags: ['Property Division', 'Divorce', 'Community Property'],
      imageUrl: 'https://pixabay.com/get/gdf2b733ea959cbf531d691715a81c65a48e88d30f908e5ff2af3a49b42328b035a287d00f565c0ea0957e4248e081e0fb44a9954e97b40d1e2d32291dc060c6d_1280.jpg'
    },
    {
      id: 5,
      title: 'Co-Parenting Tips After Divorce',
      slug: 'co-parenting-tips-after-divorce',
      summary: 'Practical advice for effective co-parenting following a divorce, focusing on communication and consistency.',
      content: '',
      author: 'Meghan A. Miller, Esq.',
      date: '2023-07-12',
      category: 'Parenting',
      tags: ['Co-Parenting', 'Divorce', 'Child Wellbeing'],
      imageUrl: 'https://pixabay.com/get/gd061bf518cf04b9f40e6d8d9ca92fa6631b4743f34af0c3c7138935f108c2cf822e4ef4f34e31269590a6f8623cb812d8d44883f7c8c3a9a00cacd007c6828ca_1280.jpg'
    },
    {
      id: 6,
      title: 'Understanding Spousal Maintenance in Arizona',
      slug: 'understanding-spousal-maintenance-arizona',
      summary: 'An overview of how alimony works in Arizona, including eligibility factors and how courts determine the amount and duration.',
      content: '',
      author: 'Meghan A. Miller, Esq.',
      date: '2023-06-20',
      category: 'Spousal Maintenance',
      tags: ['Spousal Maintenance', 'Alimony', 'Divorce'],
      imageUrl: 'https://pixabay.com/get/g3feecfd3a5791c3462b7486e3a25452d82dc7a96800203b73ddf2c4e58f1e288572f87719b0323dee93d7cb4a200e7072189e29fbf206ad1c8b1244d479a5381_1280.jpg'
    }
  ];
  
  filteredPosts: BlogPost[] = [];
  categories: string[] = [];
  selectedCategory: string = 'All';
  searchTerm: string = '';

  constructor(private seoService: SeoService) { }

  ngOnInit(): void {
    this.seoService.updateMetaTags({
      title: 'Family Law Blog | Meghan A Miller, Esq.',
      description: 'Read our blog for insights on Arizona family law topics including divorce, child custody, support, property division, and more from Attorney Meghan Miller.',
      keywords: 'family law blog, Arizona divorce tips, child custody advice, legal articles, family attorney insights'
    });
    
    // Extract unique categories from blog posts
    this.categories = ['All', ...new Set(this.blogPosts.map(post => post.category))];
    
    // Initialize with all posts
    this.filterPosts();
  }

  filterPosts(): void {
    // First filter by category if not 'All'
    let result = this.blogPosts;
    if (this.selectedCategory !== 'All') {
      result = this.blogPosts.filter(post => post.category === this.selectedCategory);
    }
    
    // Then filter by search term if present
    if (this.searchTerm.trim() !== '') {
      const term = this.searchTerm.toLowerCase().trim();
      result = result.filter(post => 
        post.title.toLowerCase().includes(term) || 
        post.summary.toLowerCase().includes(term) ||
        post.tags.some(tag => tag.toLowerCase().includes(term))
      );
    }
    
    this.filteredPosts = result;
  }

  onCategoryChange(category: string): void {
    this.selectedCategory = category;
    this.filterPosts();
  }

  onSearch(event: Event): void {
    this.searchTerm = (event.target as HTMLInputElement).value;
    this.filterPosts();
  }
}
