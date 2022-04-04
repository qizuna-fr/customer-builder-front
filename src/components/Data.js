
import { PageTow } from './PageTow';
import { Accueil } from '../pages/Accueil';
import { PageOne } from './PageOne';
import { PageThree } from './PageThree';
import { Airtable } from '../pages/Airtable';
import { TypeForm } from '../pages/TypeForm';
import { TransitionPages } from './TransitionPages';
import { PageFour } from './PageFour';
import { PageEnd } from './PageEnd';

  export const Data = [
    {
      title: 'animated-switch',
      url: '/animated-switch',
      component : <TransitionPages/>
    },
    {
      title: 'type_form',
      url: '/type_form',
      component : <TypeForm/>
    },
    {
      title: 'airtable',
      url: '/airtable',
      component : <Airtable/>
    },
    {
      title: 'accueil',
      url: '/accueil',
      component : <Accueil/>
    },
    {
      title: 'firstPage',
      url: '/first_page',
      component : <PageOne/>
    },
    {
      title: 'secondPage',
      url: '/second_page',
      component : <PageTow/>
    },
    {
      title: 'third_page',
      url: '/third_page',
      component : <PageThree/>
    },
    {
      title: 'fourthPage',
      url: '/fourth_page',
      component : <PageFour/>
    },
    {
      title: 'lastPage',
      url: '/last_page',
      component : <PageEnd/>
    },
]
