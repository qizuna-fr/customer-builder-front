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
      url: '/input-content',
      component : <InputContentComponent/>
    },
    {
      title: 'UploadFileComponent',
      url: '/uoload-file',
      component : <UploadFileComponent/>
    },
    {
      title: 'ColorComponent',
      url: '/color-picker',
      component : <ColorComponent/>
    },
    {
      title: 'FontComponent',
      url: '/font-picker',
      component : <FontComponent/>
    },
    {
      title: 'StyleComponent',
      url: '/style',
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
