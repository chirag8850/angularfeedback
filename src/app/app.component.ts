import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="form">
      <h1>Feedback Form</h1>
      <form (ngSubmit)="submitForm()">
        <label>
          Name:
          <input type="text" [(ngModel)]="name" name="name" required>
        </label>
        <br>
        <label>
          Contact:
          <input type="text" [(ngModel)]="contact" name="contact" >
        </label>
        <br>
        <label>
          Rating:
          <input type="number" [(ngModel)]="rating" name="rating" required>
        </label>
        <br>
        <label>
          Comments:
          <textarea [(ngModel)]="comment" name="comment" required></textarea>
        </label>
        <br>
        <button type="submit">Submit</button>
      </form>
    </div>
    <div *ngIf="submitted">
      <h1>Thank you for your feedback, {{ name }}!</h1>
      <p>Contact: {{ contact }}</p>
      <p>Rating: {{ rating }}</p>
      <p>Comments: {{ comment }}</p>
    </div>
  `,
  
})
export class AppComponent {
 
  name = '';
  contact = '';
  rating = 0;
  comment = '';
  submitted = false;

  submitForm() {
    this.submitted = true;
  }
}

