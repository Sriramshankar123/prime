export default {
    root: {
        class: [
            //Shape
            'rounded-md',
            'shadow-md',
            'container my-10 mx-auto px-2 w-96',

            //Color
            // 'bg-surface-0 dark:bg-surface-900',
            'text-surface-700 dark:text-surface-0',
            'bg-gray-100'
        ]
    },
    body: {
        class: 'p-5 bg-red'
    },
    title: {
        class: 'text-2xl text-red-400 flex justify-center font-bold  mb-2 bg-gray-300 w-92 h-8 px-32'
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
        class: 'py-5 flex flex-col justify-center container mx-auto ' // Vertical padding.
    },
    footer: {
        class: 'pt-5' // Top padding.
    }
};
