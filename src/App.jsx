import { Header } from './components/header/Header'

import { Main } from './pages/main/Main'

export const App = () => {
	return (
		<>
			<Header />
			<div className='container'>
				<Main />
			</div>
		</>
	)
}
