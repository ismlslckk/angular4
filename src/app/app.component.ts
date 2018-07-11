import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'deneme projesi';
}

/*
-selector:html içerisinde hangi isimle çağırıcağımızı belirtiyoruz.
-templateUrl:bu componente ait html dosyasını belirtiyoruz.
-styleUrls:html dosyasının kullanacağı css dosyalarını içerir.
./ eğer aynı klasördeki yolu göstericeksek bu şekilde tanımlama yapmak gerekmektedir.
-ng g component product -> yeni component oluşturur.
-ts:type script,aslında class'tır.
-.spec.ts:unit test oldugunu belirtir.
*/
