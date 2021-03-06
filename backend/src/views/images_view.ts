import Image from '../models/Image';

export default {
    render(image: Image) {
        return {
            id: image.id,
            url: `http://26.73.180.21:3333/uploads/${image.path}`,

        };
    },
    
    renderMany(images: Image[]) {
        return images.map(image => this.render(image));
    }
};