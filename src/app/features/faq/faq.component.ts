import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../core/services/seo.service';
import { FAQ } from '../../core/models/faq.model';
import { CommonModule, NgClass } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    NgClass,
    RouterModule,
    MatIconModule,
    MatButtonModule,
    FormsModule
  ]
})
export class FaqComponent implements OnInit {
  faqs: FAQ[] = [
    // Divorce FAQs
    {
      id: 1,
      question: 'How long does a divorce take in Arizona?',
      answer: 'In Arizona, there is a mandatory 60-day waiting period after serving divorce papers before a divorce can be finalized. However, most divorces take longer, typically 3-4 months for uncontested divorces and 6-12 months or more for contested divorces, depending on the complexity of issues and court schedules.',
      category: 'divorce'
    },
    {
      id: 2,
      question: 'What is the difference between legal separation and divorce?',
      answer: 'Both legal separation and divorce address similar issues like property division, child custody, and support. The key difference is that legally separated couples remain married, cannot remarry, and may retain certain benefits like health insurance coverage. Divorce legally ends the marriage, allowing either person to remarry. Some choose legal separation for religious reasons, to maintain healthcare benefits, or as a step before deciding on divorce.',
      category: 'divorce'
    },
    {
      id: 3,
      question: 'Is Arizona a community property state?',
      answer: 'Yes, Arizona is a community property state. This means that most assets and debts acquired during the marriage are considered jointly owned by both spouses and are typically divided equally (50/50) in a divorce. However, assets owned before marriage or received as gifts or inheritance during marriage are usually considered separate property, belonging solely to that spouse.',
      category: 'divorce'
    },
    
    // Child Custody FAQs
    {
      id: 4,
      question: 'What factors do courts consider when determining child custody?',
      answer: 'Arizona courts consider several factors when determining child custody (legal decision-making and parenting time), all focused on the child\'s best interests. These include the child\'s relationship with each parent, which parent is more likely to allow frequent and meaningful contact with the other parent, the child\'s adjustment to home and school, the mental and physical health of all parties, any history of domestic violence or substance abuse, and the child\'s wishes if they are old enough to express a reasonable preference.',
      category: 'custody'
    },
    {
      id: 5,
      question: 'What is the difference between legal decision-making and parenting time?',
      answer: 'Legal decision-making (formerly called legal custody) refers to a parent\'s right to make major decisions about the child\'s welfare, including education, healthcare, and religious upbringing. It can be joint (shared) or sole (one parent). Parenting time (formerly called physical custody) refers to the schedule that determines when the child will be with each parent. These two aspects of custody are determined separately, so a parent might have joint legal decision-making but unequal parenting time.',
      category: 'custody'
    },
    {
      id: 6,
      question: 'Can I move out of state with my child after divorce?',
      answer: 'If you share legal decision-making or parenting time with the other parent, Arizona law requires you to give at least 45 days\' written notice before relocating with a child more than 100 miles within Arizona or out of state. The other parent can petition to prevent the move, and the court will decide based on the child\'s best interests. Moving without proper notice or court approval could result in serious legal consequences, including modification of custody arrangements.',
      category: 'custody'
    },
    
    // Child Support FAQs
    {
      id: 7,
      question: 'How is child support calculated in Arizona?',
      answer: 'Arizona uses the "Income Shares Model" to calculate child support, which considers both parents\' incomes, the number of children, parenting time, healthcare and childcare costs, and other factors outlined in the Arizona Child Support Guidelines. The goal is to ensure children receive the same proportion of parental income they would have received if their parents lived together. The Arizona Supreme Court provides a calculator on their website, but an attorney can help ensure all relevant factors are properly considered.',
      category: 'support'
    },
    {
      id: 8,
      question: 'Can child support be modified after the original order?',
      answer: 'Yes, child support can be modified if there has been a "substantial and continuing change of circumstances" since the last order. This typically means a significant change in either parent\'s income, changes in parenting time, changes in the children\'s needs, or other factors that would result in at least a 15% change in the support amount. Either parent can request a modification by filing a petition with the court.',
      category: 'support'
    },
    {
      id: 9,
      question: 'How long does child support last in Arizona?',
      answer: 'In Arizona, child support typically continues until the child turns 18, or if the child is still in high school when they turn 18, until they graduate or turn 19, whichever comes first. Support may be extended for children with disabilities who are unable to support themselves. Parents can also agree to provide support for college education, though courts cannot order this unless specified in a divorce settlement.',
      category: 'support'
    },
    
    // Alimony/Spousal Maintenance FAQs
    {
      id: 10,
      question: 'Who qualifies for spousal maintenance (alimony) in Arizona?',
      answer: 'To qualify for spousal maintenance in Arizona, a spouse must meet at least one of these criteria: lack sufficient property to provide for their reasonable needs; be unable to support themselves through appropriate employment; have contributed to the other spouse\'s education; have a marriage of long duration and be of an age that precludes employment; or have cared for a child of such age or condition that employment is inappropriate. Even if eligibility is established, the court then determines the amount and duration based on factors like standard of living during marriage, marriage length, and both spouses\' financial resources.',
      category: 'alimony'
    },
    {
      id: 11,
      question: 'How long does spousal maintenance last?',
      answer: 'The duration of spousal maintenance varies widely based on individual circumstances. Arizona courts consider the marriage length as a key factor, with longer marriages typically resulting in longer maintenance periods. Short-term maintenance may be ordered to allow a spouse to gain education or training for employment. Maintenance can be temporary or indefinite, though truly permanent awards are becoming less common. The court considers the time necessary for the recipient to become self-sufficient when determining the duration.',
      category: 'alimony'
    },
    {
      id: 12,
      question: 'Can spousal maintenance be modified or terminated?',
      answer: 'Spousal maintenance can be modified or terminated if there is a substantial and continuing change in circumstances, unless the divorce decree specifically states that the maintenance is non-modifiable. Remarriage of the recipient automatically terminates maintenance unless otherwise specified. Cohabitation may be grounds for modification or termination, but is not automatic. Retirement of the paying spouse might also be grounds for modification if it significantly affects their ability to pay.',
      category: 'alimony'
    },
    
    // Property Division FAQs
    {
      id: 13,
      question: 'How are retirement accounts divided in a divorce?',
      answer: 'Retirement accounts accumulated during marriage are considered community property in Arizona and are typically divided equally between spouses. This division usually requires a Qualified Domestic Relations Order (QDRO) for accounts like 401(k)s and pensions. The QDRO is a specialized court order that instructs the plan administrator how to divide the account without triggering early withdrawal penalties. IRAs are divided through divorce decree provisions and don\'t require a QDRO. Retirement funds accumulated before marriage may be separate property, though appreciation of those funds during marriage might be subject to division.',
      category: 'property'
    },
    {
      id: 14,
      question: 'What happens to our house in a divorce?',
      answer: 'There are several options for handling the family home in an Arizona divorce: (1) Sell the house and divide the proceeds; (2) One spouse buys out the other\'s interest; (3) Continue co-ownership for a defined period (common when minor children are involved); or (4) Award the house to one spouse and offset with other assets. The appropriate option depends on factors like mortgage status, equity amount, and whether either spouse can afford to maintain the home individually. If the house was purchased before marriage, the situation becomes more complex, potentially involving both separate and community property interests.',
      category: 'property'
    },
    {
      id: 15,
      question: 'How are debts divided in an Arizona divorce?',
      answer: 'Like assets, debts incurred during marriage are generally considered community debts in Arizona and are divided equally between spouses, regardless of whose name is on the account. Debts from before marriage remain separate obligations. However, creditors can still pursue the spouse named on the account, regardless of what the divorce decree states about debt responsibility. It\'s often advisable to pay off joint debts during divorce or refinance them into individual names. For debts that can\'t be immediately resolved, your divorce decree should include provisions for liability and indemnification.',
      category: 'property'
    },
    
    // General Process FAQs
    {
      id: 16,
      question: 'What is mediation and is it required?',
      answer: 'Mediation is a voluntary process where a neutral third party helps spouses negotiate and reach agreements on divorce-related issues without going to court. In many Arizona counties, mediation is required for child-related disputes before a court hearing. Even when not required, mediation is often recommended as it\'s typically less expensive, faster, and less adversarial than litigation. Mediated agreements tend to have higher compliance rates because both parties participate in creating the solution. Successful mediation can address all divorce issues including property division, custody, and support.',
      category: 'process'
    },
    {
      id: 17,
      question: 'Do I need an attorney for my family law case?',
      answer: 'While you\'re not legally required to have an attorney for family law matters in Arizona, hiring one is highly recommended, especially for cases involving children, significant assets, or complex legal issues. Family law is complicated with long-term consequences for your financial future and parent-child relationships. An experienced attorney understands the legal system, can advise you on your rights, prevent costly mistakes, ensure proper document filing, and advocate effectively on your behalf. Even in seemingly amicable cases, having independent legal advice helps protect your interests and ensures the final agreement is fair and legally sound.',
      category: 'process'
    },
    {
      id: 18,
      question: 'What is your fee structure for family law cases?',
      answer: 'Our fee structure varies depending on the complexity and type of family law case. We offer several options: (1) Hourly rates - most common for divorce and custody cases, where you pay for the actual time spent on your case; (2) Flat fees - available for uncontested matters or specific limited services; and (3) Retainer arrangements - where you deposit funds upfront from which hourly fees are deducted. During your initial consultation, we\'ll discuss which fee structure best suits your specific situation and provide transparent information about anticipated costs based on your case\'s unique factors.',
      category: 'process'
    }
  ];
  
  filteredFaqs: FAQ[] = [];
  activeCategory: string = 'all';
  expandedId: number | null = null;
  
  categories = [
    { id: 'all', name: 'All Questions' },
    { id: 'divorce', name: 'Divorce' },
    { id: 'custody', name: 'Child Custody' },
    { id: 'support', name: 'Child Support' },
    { id: 'alimony', name: 'Spousal Maintenance' },
    { id: 'property', name: 'Property Division' },
    { id: 'process', name: 'Legal Process' }
  ];

  constructor(private seoService: SeoService) { }

  ngOnInit(): void {
    this.seoService.updateMetaTags({
      title: 'Family Law FAQ | Meghan A Miller, Esq.',
      description: 'Find answers to common questions about divorce, child custody, support, property division, and other family law matters in Arizona.',
      keywords: 'family law FAQ, divorce questions, child custody FAQ, child support questions, Arizona family law'
    });
    
    this.filterFaqs('all');
  }

  filterFaqs(category: string): void {
    this.activeCategory = category;
    this.expandedId = null;
    
    if (category === 'all') {
      this.filteredFaqs = [...this.faqs];
    } else {
      this.filteredFaqs = this.faqs.filter(faq => faq.category === category);
    }
  }

  toggleExpand(id: number): void {
    this.expandedId = this.expandedId === id ? null : id;
  }

  scrollToSection(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  
  getCategoryName(categoryId: string): string {
    const category = this.categories.find(c => c.id === categoryId);
    return category ? category.name : '';
  }
}
