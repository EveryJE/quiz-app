import { Injectable } from '@angular/core';
import { quizType } from '../mainInterface';

@Injectable({
  providedIn: 'root',
})
export class QuizTypesService {
  php: quizType[] = [
    {
      title: 'laravel',
      img_url: 'assets/frameworkImg/laravel.png',
      description: 'powerful💪🏾 php library for backend',
      quiz: 'laravel',
      documentation: 'laravel',
    },
  ];
  dart: quizType[] = [
    {
      title: 'Flutter',
      img_url: 'assets/frameworkImg/flutter.png',
      description:
        'Mobile multiplatform framework eveloped and controlled by google',
      quiz: 'flutter',
      documentation: 'flutter',
    },
  ];
  java: quizType[] = [
    {
      title: 'android',
      img_url: 'assets/frameworkImg/android.png',
      description: 'powerful💪🏾 mobile app toolkit developed using java/kotlin as main language',
      quiz: 'android',
      documentation: 'anroid',
    },
  ];
  javascript: quizType[] = [
    {
      title: 'angular Js',
      img_url: 'assets/frameworkImg/angular.png',
      description: 'javascript framework by google',
      quiz: 'angular',
      documentation: 'angular',
    },
    {
      title: 'React Js',
      img_url: 'assets/frameworkImg/react.png',
      description:
        "javascript framework by facbook which makes components it's friend",
      quiz: 'react',
      documentation: 'react',
    },
    {
      title: 'Next Js',
      img_url: 'assets/frameworkImg/next.png',
      description: 'description can be be',
      quiz: 'next',
      documentation: 'next',
    },
    {
      title: 'React Native',
      img_url: 'assets/frameworkImg/react-native.png',
      description:
        'open source Mobile multiplatform framework eveloped by facebook',
      quiz: 'react-native',
      documentation: 'react-native',
    },
  ];

  getLanguageType(langType: string): quizType[] {
    let quizTypeArray: quizType[] = this.javascript;

    if (langType == 'php') {
      quizTypeArray = this.php;
    } else if (langType == 'javascript') {
      quizTypeArray = this.javascript;
    } else if (langType == 'java') {
      quizTypeArray = this.java;
    } else if (langType == 'dart') {
      quizTypeArray = this.dart;
    }
    return quizTypeArray;
  }

  constructor() {}
}
