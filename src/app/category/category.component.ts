import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { NewsApiService } from '../core/services/news-api.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss',
  standalone: true,
  imports: [AsyncPipe, NgIf, NgFor],
})
export class CategoryComponent implements OnInit {
  category!: string | null;
  categoryData: any;

  constructor(private activatedRoute: ActivatedRoute, private newsApiService: NewsApiService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.category = params['category'];
      console.log('category: ', this.category)
      this.loadCategoryNews(this.category);
    });
  }

  loadCategoryNews(category: any): void {
    this.newsApiService.getCategoryNews(category).subscribe((data: any) => {
      this.categoryData = data;
      console.log('categoryData: ', this.categoryData)
    });
  }
}
