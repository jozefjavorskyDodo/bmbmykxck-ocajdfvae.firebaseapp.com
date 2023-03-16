

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch((err) => { console.clear(); console.error(err); } );
