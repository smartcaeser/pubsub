var chosen = (function () {

    
    
    return {
        init: function () {

            var chosen_list, chosen_total, count = 0;

            chosen_list = $('#chosen_list');
            chosen_total = $('#chosen_total');

            

            pubsub.sub('add-to-list', function (item) {
                count++;
                chosen_total.html(count);
                var li = $('<li/>').html(item.name).data('key', item.id);
                chosen_list.append(li);

            });

            pubsub.sub('remove-from-list', function (item) {
                count--;
                chosen_total.html(count);
                chosen_list.find('li').filter(function () {
                    console.log($(this).data('key'));
                    return $(this).data('key') == item.id;
                }).remove();
            });
        }
    };
})();