var list = (function () {
    return {
        init: function () {
            $('#list').on('click','button', function () {
                var $this = $(this), item = {
                    id: this,
                    name : $this.parents('li:first').find('span').html()
                };
                if ($this.hasClass('remove')) {
                    $this.removeClass('remove').html('+');
                    pubsub.pub('remove-from-list', item);
                } else {
                    $this.addClass('remove').html('-');
                    pubsub.pub('add-to-list', item);
                }
            });
        }
    };
})();