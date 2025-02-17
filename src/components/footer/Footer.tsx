import { GithubLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {

    let data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center bg-gradient-to-r from-[#F30086] to-[#900551]
 text-white w-full fixed bottom-0 left-0">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>
                            Blog Pessoal Ianka Lps | Copyright: {data}
                        </p>
                    <p className='text-lg'>Acesse minhas redes sociais</p>
                    <div className='flex gap-2'>

                    <a href="https://www.linkedin.com/in/iankalps/" target="_blank">
    	                <LinkedinLogo size={48} weight='bold' />
                    </a>

                    <a href="https://github.com/IankaLps" target="_blank">
                        <GithubLogo size={48} weight="bold" />
                    </a>

                    <a href="https://www.linkedin.com/in/seu_usuario" target="_blank">
                        <InstagramLogo size={48} weight='bold' />
                    </a>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer