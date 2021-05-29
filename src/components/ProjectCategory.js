import * as React from 'react'

export class ProjectCategory extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        {
          id: 0,
          title: 'Flutter',
          link: 'https://flutter.dev/',
        },
        {
          id: 1,
          title: 'Blender',
          link: 'https://github.com/blender',
        },
        {
          id: 2,
          title: 'Firebase',
          link: 'https://firebase.google.com/',
        },
        {
          id: 3,
          title: 'Node.js',
          link: 'https://nodejs.org/en/about/',
        },
        {
          id: 4,
          title: 'GitHub API',
          link: 'https://docs.github.com/en/rest',
        },
        {
          id: 5,
          title: 'Stream Processing',
          link:
            'https://www.ververica.com/what-is-stream-processing#:~:text=Stream%20processing%20is%20the%20processing,series%20of%20events%20over%20time.',
        },
        {
          id: 6,
          title: 'Game Development',
          link: 'https://en.wikipedia.org/wiki/Video_game_development',
        },
        {
          id: 7,
          title: 'Multimedia Design',
          link: 'https://learn.org/articles/What_is_Multimedia_Design.html',
        },
        {
          id: 8,
          title: 'Kotlin',
          link: 'https://kotlinlang.org/',
        },
        {
          id: 9,
          title: 'Python',
          link: 'https://www.python.org/',
        },
        {
          id: 10,
          title: 'Embedded Systems',
          link:
            'https://en.wikipedia.org/wiki/Embedded_system#:~:text=An%20embedded%20system%20is%20a,larger%20mechanical%20or%20electronic%20system.',
        },
        {
          id: 11,
          title: 'Signal Processing',
          link:
            'https://en.wikipedia.org/wiki/Signal_processing#:~:text=Signal%20processing%20is%20an%20electrical,%2C%20images%2C%20and%20scientific%20measurements.',
        },
        {
          id: 12,
          title: 'Unity',
          link: 'https://unity.com/',
        },
        {
          id: 13,
          title: 'C/C++',
          link:
            'https://www.toptal.com/c/the-ultimate-list-of-resources-to-learn-c-and-c-plus-plus',
        },
        {
          id: 14,
          title: 'Circuits',
          link: 'https://en.wikipedia.org/wiki/Electronic_circuit',
        },
        {
          id: 15,
          title: 'MATLAB',
          link: 'https://www.mathworks.com/products/matlab.html',
        },
        {
          id: 16,
          title: 'SolidWorks',
          link: 'https://www.solidworks.com/domain/design-engineering',
        },
        {
          id: 17,
          title: 'Arduino',
          link: 'https://www.arduino.cc/',
        },
      ],
    }
  }
}
