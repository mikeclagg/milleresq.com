import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../core/services/seo.service';
import { PracticeArea } from '../../core/models/practice-area.model';
import { CommonModule, NgClass } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-practice-areas',
  templateUrl: './practice-areas.component.html',
  styleUrls: ['./practice-areas.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    NgClass,
    RouterModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class PracticeAreasComponent implements OnInit {
  practiceAreas: PracticeArea[] = [
    {
      id: 1,
      title: 'Divorce',
      icon: 'balance',
      shortDescription: 'Navigating divorce with compassion and strategic guidance.',
      fullDescription: 'Our divorce representation covers all aspects of marital dissolution, including both contested and uncontested divorces. We help clients navigate the complex legal process, focusing on achieving fair and favorable outcomes regarding property division, spousal maintenance, child custody, and support. We understand that each divorce has unique circumstances, and we tailor our approach to meet your specific needs and goals.',
      bullets: [
        'Contested and uncontested divorces',
        'Property and debt division',
        'High-asset divorce cases',
        'Military divorces',
        'Alimony/spousal maintenance'
      ],
      slug: 'divorce'
    },
    {
      id: 2,
      title: 'Child Custody',
      icon: 'family_restroom',
      shortDescription: 'Protecting your children\'s best interests with dedicated legal representation.',
      fullDescription: 'Child custody matters require delicate handling with a focus on the best interests of the children involved. We advocate for parenting arrangements that support healthy child development while protecting your parental rights. Our practice covers legal decision-making authority (legal custody) and parenting time (physical custody) matters, including initial determinations and modifications of existing orders as circumstances change.',
      bullets: [
        'Legal decision-making (legal custody)',
        'Parenting time arrangements',
        'Custody modifications',
        'Relocation cases',
        'Grandparent and third-party rights'
      ],
      slug: 'child-custody'
    },
    {
      id: 3,
      title: 'Child Support',
      icon: 'child_care',
      shortDescription: 'Ensuring fair child support arrangements for your children\'s well-being.',
      fullDescription: 'We help clients establish, modify, or enforce child support orders in accordance with Arizona\'s child support guidelines. Our attorney ensures that all relevant factors are considered, including income, healthcare costs, childcare expenses, and special needs. We work diligently to secure arrangements that properly provide for children\'s financial needs while being fair to both parents.',
      bullets: [
        'Child support establishment',
        'Support modifications',
        'Enforcement of support orders',
        'Income calculations for self-employed parents',
        'Deviation from guidelines in special circumstances'
      ],
      slug: 'child-support'
    },
    {
      id: 4,
      title: 'Spousal Maintenance',
      icon: 'handshake',
      shortDescription: 'Advocating for fair alimony arrangements based on your unique circumstances.',
      fullDescription: 'Spousal maintenance (alimony) can be one of the most contentious issues in a divorce. We provide skilled representation for both those seeking maintenance and those who may be required to pay it. Our approach is based on a thorough analysis of the relevant factors under Arizona law, including the duration of the marriage, standard of living, earning capacity, and contributions to the marriage.',
      bullets: [
        'Temporary and permanent maintenance',
        'Negotiation of maintenance agreements',
        'Modifications due to changed circumstances',
        'Enforcement of maintenance orders',
        'Tax implications of maintenance payments'
      ],
      slug: 'spousal-maintenance'
    },
    {
      id: 5,
      title: 'Property Division',
      icon: 'home',
      shortDescription: 'Securing your fair share of marital assets through skilled negotiation and advocacy.',
      fullDescription: 'Arizona is a community property state, which means that assets and debts acquired during marriage are generally divided equally. However, many factors can complicate property division, particularly in high-asset cases or when businesses are involved. We provide comprehensive representation to identify, value, and fairly divide marital property while protecting separate assets.',
      bullets: [
        'Identification and valuation of assets',
        'Division of retirement accounts and pensions',
        'Business valuation and division',
        'Real estate division',
        'Hidden asset investigation'
      ],
      slug: 'property-division'
    },
    {
      id: 6,
      title: 'Domestic Violence',
      icon: 'security',
      shortDescription: 'Protection and advocacy for survivors of domestic violence.',
      fullDescription: 'We provide compassionate, prompt legal assistance to those affected by domestic violence, helping them obtain orders of protection and navigate related family law matters. We also defend clients against false allegations of domestic violence. In all cases, we prioritize safety while ensuring that legal rights are protected.',
      bullets: [
        'Orders of protection',
        'Emergency custody orders',
        'Addressing domestic violence in custody cases',
        'Defense against false allegations',
        'Safety planning in legal proceedings'
      ],
      slug: 'domestic-violence'
    },
    {
      id: 7,
      title: 'Paternity',
      icon: 'person',
      shortDescription: 'Establishing legal rights and responsibilities through paternity actions.',
      fullDescription: 'Establishing paternity is crucial for unmarried parents seeking to define legal rights and responsibilities regarding their children. We handle paternity cases sensitively, working to establish legal father-child relationships that provide children with emotional and financial support while protecting fathers\' parental rights.',
      bullets: [
        'Paternity establishment',
        'Parental rights for unwed fathers',
        'Child support in paternity cases',
        'Custody and parenting time for unmarried parents',
        'Genetic testing issues'
      ],
      slug: 'paternity'
    },
    {
      id: 8,
      title: 'Post-Decree Modifications',
      icon: 'edit',
      shortDescription: 'Adapting legal arrangements to reflect life\'s changes.',
      fullDescription: 'Life circumstances change after divorce or initial custody orders. We help clients modify child custody, parenting time, child support, and spousal maintenance when substantial changes in circumstances warrant adjustments to existing court orders. Our goal is to ensure that legal arrangements continue to serve our clients\' and their children\'s needs as life evolves.',
      bullets: [
        'Custody and parenting time modifications',
        'Child support adjustments',
        'Spousal maintenance modifications',
        'Relocation requests and oppositions',
        'Enforcement of existing orders'
      ],
      slug: 'post-decree-modifications'
    }
  ];

  constructor(private seoService: SeoService) { }

  ngOnInit(): void {
    this.seoService.updateMetaTags({
      title: 'Family Law Practice Areas | Meghan A Miller, Esq.',
      description: 'Arizona attorney Meghan Miller provides expert legal services in divorce, child custody, support, property division, domestic violence, and all family law matters.',
      keywords: 'divorce lawyer, child custody attorney, child support, spousal maintenance, family law services, Arizona family attorney'
    });
  }

  scrollToArea(areaSlug: string): void {
    const element = document.getElementById(areaSlug);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
