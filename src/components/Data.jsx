import { Accueil } from '../pages/Accueil';
import { LastPage } from '../pages/LastPage';
import { Slider } from '../slides/Slider';
import { InputContentComponent } from './InputContentComponent';
import { UploadFileComponent } from './UploadFileComponent';
import { ColorComponent } from './ColorComponent';
import { FontComponent } from './FontComponent';
import { StyleComponent } from './StyleComponent';
import { Preview } from '../pages/Preview';

  export const Data = [
    {
      title: 'qizuna',
      url: '/qizuna',
      component : <Slider/>
    },
    {
      title: 'accueil',
      url: '/accueil',
      component : <Accueil/>
    },
    {
      title: 'InputContentComponent',
      component : <InputContentComponent/>
    },
    {
      title: 'UploadFileComponent',
      component : <UploadFileComponent/>
    },
    {
      title: 'ColorComponent',
      component : <ColorComponent/>
    },
    {
      title: 'FontComponent',
      component : <FontComponent/>
    },
    {
      title: 'StyleComponent',
      component : <StyleComponent/>
    },
    {
      title: 'lastPage',
      url: '/last-page',
      component : <LastPage/>
    },
    {
      title: 'preview',
      url: '/preview',
      component : <Preview/>
    }
]
