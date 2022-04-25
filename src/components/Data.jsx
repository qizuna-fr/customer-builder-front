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
      id: 'recCu5skhFCwqRgTm',
      url: '/page1',
      color : 'orange',
      component : <InputContentComponent/>
    },
    {
      title: 'UploadFileComponent',
      id: 'recauoAwNNzk9cI44',
      url: '/page2',
      color : 'tomato',
      component : <UploadFileComponent/>
    },
    {
      title: 'ColorComponent',
      id: 'reco7nJB2OUhaPI3A',
      url: '/page3',
      color : 'orchid',
      component : <ColorComponent/>
    },
    {
      title: 'FontComponent',
      id: 'recINBZ8Xs2vcZbrm',
      url: '/page4',
      color : 'DarkSeaGreen',
      component : <FontComponent/>
    },
    {
      title: 'StyleComponent',
      id: 'rec5uJJlLGdQpnmmK',
      url: '/page5',
      color : 'DarkSeaGreen',
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
