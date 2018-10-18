new Vue({
  el: '#app',
  data: {
    file: null,
    preview: null,
    pages: []
  },
  methods: {
    openWidget(url) {
      window.cloudinary.openUploadWidget(
        {
          cloud_name: 'djteonv3q',
          upload_preset: 'UPLOAD_PRESET',
          tags: ['pdf'],
          sources: [
            'local',
            'url',
          ]
        },
        (error, result) => {
          console.log(error, result);
          this.file = result[0];
          this.preview = `http://res.cloudinary.com/djteonv3q/image/upload/w_350,h_400,c_fill,pg_1/${this.file.public_id}.jpg`;
          for (let i = 1; i <= this.file.pages; i++) {
            this.pages.push(
              {
                url: `http://res.cloudinary.com/djteonv3q/image/upload/w_200,h_250,c_fill,pg_${i}/${this.file.public_id}.jpg`,
                page: i
              }
            )
          }
        }
      );
    }
  }
});
