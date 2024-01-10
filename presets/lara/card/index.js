export default {
    root: {
        class: [
            //Shape
            'rounded-md',
            'shadow-md',
            'container mx-auto bg-red',

            //Color
            // 'bg-surface-0 dark:bg-surface-900',
            'text-surface-700 dark:text-surface-0'
        ]
    },
    body: {
        class: 'p-5 bg-red'
    },
    title: {
        class: 'text-2xl flex justify-center font-bold mb-2'
    },
    subtitle: {
        class: [
            //Font
            'font-normal',

            //Spacing
            'mb-2',

            //Color
            'text-surface-600 dark:text-surface-0/60'
        ]
    },
    content: {
        class: 'py-5 flex flex-col justify-center container mx-auto bg-red' // Vertical padding.
    },
    footer: {
        class: 'pt-5' // Top padding.
    }
};
