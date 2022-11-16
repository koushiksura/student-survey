import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/services/survey-api/api.service';


@Component({
  selector: 'app-surveyarchieves',
  templateUrl: './surveyarchieves.component.html',
  styleUrls: ['./surveyarchieves.component.scss']
})
export class SurveyarchievesComponent implements OnInit {

  surveyData: surveyDataElement[] = [
    {
      id: 1,
      userName: 'Hydrogen',
      city: 'Fairfax',
      state: 'VA',
      address: 'lol',
      zip: '22030',
      phone: '5712016812',
      email: 'ksurabha@gmu.edu',
      dateOfSurvey: '10-03-2022',
      likes: 'friends',
      interests: 'television',
      rating: 'likely',
      values: '1,2,3,4,5,6,7,8,9,10',
      comments: 'aesrdthnsbavcshdhbsv'
    },
    {
      id: 2,
      userName: 'Hydrogen',
      city: 'Fairfax',
      state: 'VA',
      address: 'lol',
      zip: '22030',
      phone: '5712016812',
      email: 'ksurabha@gmu.edu',
      dateOfSurvey: '10-03-2022',
      likes: 'friends',
      interests: 'television',
      rating: 'likely',
      values: '1,2,3,4,5,6,7,8,9,10',
      comments: 'aesrdthnsbavcshdhbsv'
    },
    {
      id: 3,
      userName: 'Hydrogen',
      city: 'Fairfax',
      state: 'VA',
      address: 'lol',
      zip: '22030',
      phone: '5712016812',
      email: 'ksurabha@gmu.edu',
      dateOfSurvey: '10-03-2022',
      likes: 'friends',
      interests: 'television',
      rating: 'likely',
      values: '1,2,3,4,5,6,7,8,9,10',
      comments: 'aesrdthnsbavcshdhbsv'
    },
    {
      id: 4,
      userName: 'Hydrogen',
      city: 'Fairfax',
      state: 'VA',
      address: 'lol',
      zip: '22030',
      phone: '5712016812',
      email: 'ksurabha@gmu.edu',
      dateOfSurvey: '10-03-2022',
      likes: 'friends',
      interests: 'television',
      rating: 'likely',
      values: '1,2,3,4,5,6,7,8,9,10',
      comments: 'aesrdthnsbavcshdhbsv'
    },
    {
      id: 5,
      userName: 'Hydrogen',
      city: 'Fairfax',
      state: 'VA',
      address: 'lol',
      zip: '22030',
      phone: '5712016812',
      email: 'ksurabha@gmu.edu',
      dateOfSurvey: '10-03-2022',
      likes: 'friends',
      interests: 'television',
      rating: 'likely',
      values: '1,2,3,4,5,6,7,8,9,10',
      comments: 'aesrdthnsbavcshdhbsv'
    },
    {
      id: 6,
      userName: 'Hydrogen',
      city: 'Fairfax',
      state: 'VA',
      address: 'lol',
      zip: '22030',
      phone: '5712016812',
      email: 'ksurabha@gmu.edu',
      dateOfSurvey: '10-03-2022',
      likes: 'friends',
      interests: 'television',
      rating: 'likely',
      values: '1,2,3,4,5,6,7,8,9,10',
      comments: 'aesrdthnsbavcshdhbsv'
    },
    {
      id: 7,
      userName: 'Hydrogen',
      city: 'Fairfax',
      state: 'VA',
      address: 'lol',
      zip: '22030',
      phone: '5712016812',
      email: 'ksurabha@gmu.edu',
      dateOfSurvey: '10-03-2022',
      likes: 'friends',
      interests: 'television',
      rating: 'likely',
      values: '1,2,3,4,5,6,7,8,9,10',
      comments: 'aesrdthnsbavcshdhbsv'
    },
    {
      id: 8,
      userName: 'Hydrogen',
      city: 'Fairfax',
      state: 'VA',
      address: 'lol',
      zip: '22030',
      phone: '5712016812',
      email: 'ksurabha@gmu.edu',
      dateOfSurvey: '10-03-2022',
      likes: 'friends',
      interests: 'television',
      rating: 'likely',
      values: '1,2,3,4,5,6,7,8,9,10',
      comments: 'aesrdthnsbavcshdhbsv'
    },
    {
      id: 9,
      userName: 'Hydrogen',
      city: 'Fairfax',
      state: 'VA',
      address: 'lol',
      zip: '22030',
      phone: '5712016812',
      email: 'ksurabha@gmu.edu',
      dateOfSurvey: '10-03-2022',
      likes: 'friends',
      interests: 'television',
      rating: 'likely',
      values: '1,2,3,4,5,6,7,8,9,10',
      comments: 'aesrdthnsbavcshdhbsv'
    },
    {
      id: 10,
      userName: 'Hydrogen',
      city: 'Fairfax',
      state: 'VA',
      address: 'lol',
      zip: '22030',
      phone: '5712016812',
      email: 'ksurabha@gmu.edu',
      dateOfSurvey: '10-03-2022',
      likes: 'friends',
      interests: 'television',
      rating: 'likely',
      values: '1,2,3,4,5,6,7,8,9,10',
      comments: 'aesrdthnsbavcshdhbsv'
    },
    {
      id: 11,
      userName: 'Hydrogen',
      city: 'Fairfax',
      state: 'VA',
      address: 'lol',
      zip: '22030',
      phone: '5712016812',
      email: 'ksurabha@gmu.edu',
      dateOfSurvey: '10-03-2022',
      likes: 'friends',
      interests: 'television',
      rating: 'likely',
      values: '1,2,3,4,5,6,7,8,9,10',
      comments: 'aesrdthnsbavcshdhbsv'
    },
    {
      id: 12,
      userName: 'Hydrogen',
      city: 'Fairfax',
      state: 'VA',
      address: 'lol',
      zip: '22030',
      phone: '5712016812',
      email: 'ksurabha@gmu.edu',
      dateOfSurvey: '10-03-2022',
      likes: 'friends',
      interests: 'television',
      rating: 'likely',
      values: '1,2,3,4,5,6,7,8,9,10',
      comments: 'aesrdthnsbavcshdhbsv'
    },
    {
      id: 13,
      userName: 'Hydrogen',
      city: 'Fairfax',
      state: 'VA',
      address: 'lol',
      zip: '22030',
      phone: '5712016812',
      email: 'ksurabha@gmu.edu',
      dateOfSurvey: '10-03-2022',
      likes: 'friends',
      interests: 'television',
      rating: 'likely',
      values: '1,2,3,4,5,6,7,8,9,10',
      comments: 'aesrdthnsbavcshdhbsv'
    },
    {
      id: 14,
      userName: 'Hydrogen',
      city: 'Fairfax',
      state: 'VA',
      address: 'lol',
      zip: '22030',
      phone: '5712016812',
      email: 'ksurabha@gmu.edu',
      dateOfSurvey: '10-03-2022',
      likes: 'friends',
      interests: 'television',
      rating: 'likely',
      values: '1,2,3,4,5,6,7,8,9,10',
      comments: 'aesrdthnsbavcshdhbsv'
    },
    {
      id: 15,
      userName: 'Hydrogen',
      city: 'Fairfax',
      state: 'VA',
      address: 'lol',
      zip: '22030',
      phone: '5712016812',
      email: 'ksurabha@gmu.edu',
      dateOfSurvey: '10-03-2022',
      likes: 'friends',
      interests: 'television',
      rating: 'likely',
      values: '1,2,3,4,5,6,7,8,9,10',
      comments: 'aesrdthnsbavcshdhbsv'
    },
    {
      id: 16,
      userName: 'Hydrogen',
      city: 'Fairfax',
      state: 'VA',
      address: 'lol',
      zip: '22030',
      phone: '5712016812',
      email: 'ksurabha@gmu.edu',
      dateOfSurvey: '10-03-2022',
      likes: 'friends',
      interests: 'television',
      rating: 'likely',
      values: '1,2,3,4,5,6,7,8,9,10',
      comments: 'aesrdthnsbavcshdhbsv'
    },
    {
      id: 17,
      userName: 'Hydrogen',
      city: 'Fairfax',
      state: 'VA',
      address: 'lol',
      zip: '22030',
      phone: '5712016812',
      email: 'ksurabha@gmu.edu',
      dateOfSurvey: '10-03-2022',
      likes: 'friends',
      interests: 'television',
      rating: 'likely',
      values: '1,2,3,4,5,6,7,8,9,10',
      comments: 'aesrdthnsbavcshdhbsv'
    },
    {
      id: 18,
      userName: 'Hydrogen',
      city: 'Fairfax',
      state: 'VA',
      address: 'lol',
      zip: '22030',
      phone: '5712016812',
      email: 'ksurabha@gmu.edu',
      dateOfSurvey: '10-03-2022',
      likes: 'friends',
      interests: 'television',
      rating: 'likely',
      values: '1,2,3,4,5,6,7,8,9,10',
      comments: 'aesrdthnsbavcshdhbsv'
    },
    {
      id: 19,
      userName: 'Hydrogen',
      city: 'Fairfax',
      state: 'VA',
      address: 'lol',
      zip: '22030',
      phone: '5712016812',
      email: 'ksurabha@gmu.edu',
      dateOfSurvey: '10-03-2022',
      likes: 'friends',
      interests: 'television',
      rating: 'likely',
      values: '1,2,3,4,5,6,7,8,9,10',
      comments: 'aesrdthnsbavcshdhbsv'
    },
    {
      id: 20,
      userName: 'Hydrogen',
      city: 'Fairfax',
      state: 'VA',
      address: 'lol',
      zip: '22030',
      phone: '5712016812',
      email: 'ksurabha@gmu.edu',
      dateOfSurvey: '10-03-2022',
      likes: 'friends',
      interests: 'television',
      rating: 'likely',
      values: '1,2,3,4,5,6,7,8,9,10',
      comments: 'aesrdthnsbavcshdhbsv'
    }
  ];
  emptysurveyData: surveyDataElement[] = [];
  surveyColumns: string[] = [
    'id',
    'User Name',
    'Address',
    'City',
    'State',
    'Zip',
    'Phone',
    'E-mail',
    'Likes',
    'Interests',
    'Date of Survey',
    'Ratings',
    'Values',
    'Comments'
  ];
  dataSource: MatTableDataSource<surveyDataElement> = new MatTableDataSource<surveyDataElement>(this.emptysurveyData);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(public router: Router, private api: ApiService) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<surveyDataElement>(this.surveyData);
    this.api.getSurveyData().subscribe((data:any)=>{
      console.log(data)
    })
  }
  
  ngAfterViewInit() {
    if (this.dataSource) this.dataSource.paginator = this.paginator;
  }
}

export interface surveyDataElement {
  id: number;
  userName: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  email: string;
  dateOfSurvey: string;
  likes: string;
  interests: string;
  rating: string;
  values: string;
  comments: string;
}