export default {
    title: 'Embedded video',
    name: 'embeddedVideo',
    type: 'document',
    fields: [
      {title: 'Title', name: 'title', type: 'string'},
      {
        title: 'Video file',
        name: 'video',
        type: 'mux.video',
      },
    ],
  }