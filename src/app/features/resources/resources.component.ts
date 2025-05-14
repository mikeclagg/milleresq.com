import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../core/services/seo.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class ResourcesComponent implements OnInit {
  legalResources = [
    {
      title: 'Arizona Judicial Branch - Self-Service Center',
      description: 'Provides forms, instructions, and information about family court procedures for self-represented litigants.',
      link: 'https://www.azcourts.gov/selfservicecenter/',
      icon: 'gavel'
    },
    {
      title: 'Arizona State Bar Association',
      description: 'Information about finding legal representation, lawyer referral services, and educational resources about legal matters in Arizona.',
      link: 'https://www.azbar.org/',
      icon: 'balance'
    },
    {
      title: 'Arizona Legal Aid',
      description: 'Free legal assistance for low-income individuals with civil legal problems, including family law matters.',
      link: 'https://www.azlawhelp.org/',
      icon: 'people'
    },
    {
      title: 'Arizona Child Support Services',
      description: 'Information about child support guidelines, calculation, modification, and enforcement in Arizona.',
      link: 'https://des.az.gov/services/child-and-family/child-support',
      icon: 'attach_money'
    }
  ];
  
  familyResources = [
    {
      title: 'Arizona Department of Economic Security',
      description: 'Provides various support services for families, including childcare assistance, nutrition assistance, and healthcare programs.',
      link: 'https://des.az.gov/',
      icon: 'support'
    },
    {
      title: 'Family Involvement Center',
      description: 'Support and resources for families with children experiencing emotional, behavioral, or mental health challenges.',
      link: 'https://www.familyinvolvementcenter.org/',
      icon: 'family_restroom'
    },
    {
      title: 'Arizona Coalition to End Sexual & Domestic Violence',
      description: 'Resources for victims of domestic violence, including emergency shelter, legal advocacy, and counseling services.',
      link: 'https://www.acesdv.org/',
      icon: 'security'
    },
    {
      title: 'Parents Without Partners',
      description: 'Support and resources for single parents and their children, including educational programs and social activities.',
      link: 'https://www.parentswithoutpartners.org/',
      icon: 'person'
    }
  ];
  
  courtForms = [
    {
      title: 'Divorce Petition',
      description: 'Initial forms to file for divorce in Arizona, including a petition, summons, and preliminary injunction.',
      downloadLink: '#',
      category: 'Divorce'
    },
    {
      title: 'Child Custody Petition',
      description: 'Forms to establish or modify legal decision-making and parenting time arrangements.',
      downloadLink: '#',
      category: 'Child Custody'
    },
    {
      title: 'Child Support Worksheet',
      description: 'Forms used to calculate child support obligations based on Arizona guidelines.',
      downloadLink: '#',
      category: 'Child Support'
    },
    {
      title: 'Order of Protection',
      description: 'Forms to request an order of protection in cases involving domestic violence.',
      downloadLink: '#',
      category: 'Protective Orders'
    },
    {
      title: 'Financial Affidavit',
      description: 'Required form disclosing financial information in family law cases involving support or property division.',
      downloadLink: '#',
      category: 'Financial Disclosure'
    },
    {
      title: 'Parenting Plan',
      description: 'Template to outline proposed custody arrangements, including parenting time schedules and decision-making authority.',
      downloadLink: '#',
      category: 'Child Custody'
    }
  ];
  
  educationalGuides = [
    {
      title: 'Understanding the Arizona Divorce Process',
      description: 'A comprehensive guide to the divorce process in Arizona, including legal requirements, property division, and typical timelines.',
      category: 'Divorce'
    },
    {
      title: 'Co-Parenting After Divorce',
      description: 'Strategies for effective co-parenting, communication techniques, and how to minimize conflict for your children\'s benefit.',
      category: 'Parenting'
    },
    {
      title: 'Child Support in Arizona: A Parent\'s Guide',
      description: 'Explanation of how child support is calculated, modification procedures, and enforcement mechanisms.',
      category: 'Child Support'
    },
    {
      title: 'Property Division in Arizona Divorce',
      description: 'Overview of community property laws in Arizona and how assets and debts are typically divided in divorce proceedings.',
      category: 'Property Division'
    }
  ];

  constructor(private seoService: SeoService) { }

  ngOnInit(): void {
    this.seoService.updateMetaTags({
      title: 'Family Law Resources | Meghan A Miller, Esq.',
      description: 'Access helpful resources for Arizona family law matters, including court forms, legal guides, support services, and educational materials.',
      keywords: 'family law resources, Arizona divorce resources, child custody forms, legal assistance, family support services'
    });
  }
}
