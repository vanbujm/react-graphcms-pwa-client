import React from 'react';
import { Content } from './Content';
import renderer from 'react-test-renderer';

it('Renders content', () => {
  const exampleContenfulContent = {
    'title': {
      'de-DE': 'Hallo SDKs',
      'en-US': 'Hello SDKs'
    },
    'slug': {
      'en-US': 'hello-sdks'
    },
    'image': {
      'en-US': {
        'sys': {
          'space': {
            'sys': {
              'type': 'Link',
              'linkType': 'Space',
              'id': 'tw4ymfsmbef6'
            }
          },
          'id': '6nvWJT1AkM64so8Auue4QQ',
          'type': 'Asset',
          'createdAt': '2018-11-05T01:24:46.652Z',
          'updatedAt': '2018-11-05T01:24:46.652Z',
          'environment': {
            'sys': {
              'id': 'master',
              'type': 'Link',
              'linkType': 'Environment'
            }
          },
          'revision': 1
        },
        'fields': {
          'title': {
            'en-US': 'Contentful hero'
          },
          'file': {
            'en-US': {
              'url': '//images.ctfassets.net/tw4ymfsmbef6/6nvWJT1AkM64so8Auue4QQ/328f902b490337ec0dd391e202c173ef/EngineeringHistory.png',
              'details': {
                'size': 100983,
                'image': {
                  'width': 1908,
                  'height': 887
                }
              },
              'fileName': 'EngineeringHistory.png',
              'contentType': 'image/png'
            }
          }
        }
      }
    },
    'shortDescription': {
      'de-DE': 'Lernen Sie den Umgang mit unseren SDKs.',
      'en-US': 'Learn about best practices when using our SDKs.'
    },
    'description': {
      'de-DE': 'Sobald Sie sich den Quellcode der Besipielanwendung ansehen, werden Sie ein Gespür entwickeln, wie Sie am besten die Contentful SDKs in Ihrer Programmiersprache benutzen. Für weitere, fremde Abhängigkeiten, schauen Sie bitte in der jewiligen Dokumentation nach.',
      'en-US': 'By looking at the code of the example app, you\'ll get a sense of how to use a Contentful SDK in your favorite programming language.'
    },
    'duration': {
      'en-US': 5
    },
    'skillLevel': {
      'en-US': 'beginner'
    },
  };

  const tree = renderer
    .create(<Content content={exampleContenfulContent}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
