import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'new-test';
  async ngOnInit() { 
    const data = {name: 'kek'}
    let response = await fetch('http://gallery.dev.webant.ru/api/users', {method: 'POST', body: JSON.stringify(data)});

    if (response.ok) { // если HTTP-статус в диапазоне 200-299
      // получаем тело ответа (см. про этот метод ниже)
      let json = await response.json();
      console.log(json)
    } else {
      alert("Ошибка HTTP: " + response.status);
    }
   }
}
