const Image = require('../App/your_image_schema');
const assert = require('assert');

describe('create record', () => {
    it('create user image in DB', () => {
        // assert(true);
        const sam = new Image({ name: "sam" });
        sam.save()
            .then(() => {
                assert(!sam.isNew)
            })
            .catch(() => {
                console.log("error")
            })
    })
})