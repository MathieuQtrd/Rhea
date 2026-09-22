const root = ReactDOM.createRoot(document.getElementById('root'))

const element = React.createElement(
    'h1',
    { className: 'titre' },
    'Bonjour à tous'    
)

root.render(element)