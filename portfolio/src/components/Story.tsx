import { BiLogoReact, BiLogoJavascript } from 'react-icons/bi'
import { TbBrandCSharp } from 'react-icons/tb'
import { AiFillHtml5 } from 'react-icons/ai'
import { SiCss3 } from 'react-icons/si'
import { BsFiletypeSql } from 'react-icons/bs'

const Story = () => {
    return (
        <div className="my-story">
            <h2>My Story.</h2>
            <div className="my-story-content">
                <p className='content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quo odit beatae blanditiis expedita
                    dignissimos laudantium accusamus non molestiae voluptate quis sed obcaecati consequuntur enim
                    asperiores
                    tempore numquam, reiciendis delectus.
                    Adipisci, quam soluta fugit molestiae eligendi quos! Deleniti consequuntur porro ducimus fugit illo?
                    Harum
                    placeat nam eaque asperiores esse. Dolorum aperiam non assumenda quo. Assumenda molestiae quae
                    magnam
                    numquam perferendis!
                    Debitis, assumenda ea nulla voluptatem soluta maxime illo aperiam numquam voluptates, expedita
                    explicabo
                    rem
                    labore, possimus corrupti nam. Voluptatem debitis enim deleniti adipisci. Consectetur qui possimus
                    fugiat
                    at, animi aliquid!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quo odit beatae blanditiis expedita
                    dignissimos laudantium accusamus non molestiae voluptate quis sed obcaecati consequuntur enim
                    asperiores
                    tempore numquam, reiciendis delectus.
                    Adipisci, quam soluta fugit molestiae eligendi quos! Deleniti consequuntur porro ducimus fugit illo?
                    Harum
                    placeat nam eaque asperiores esse. Dolorum aperiam non assumenda quo. Assumenda molestiae quae
                    magnam
                    numquam perferendis!
                    Debitis, assumenda ea nulla voluptatem soluta maxime illo aperiam numquam voluptates, expedita
                    explicabo
                    rem
                    labore, possimus corrupti nam. Voluptatem debitis enim deleniti adipisci. Consectetur qui possimus
                    fugiat
                    at, animi aliquid!
                </p>
                <article id="my-skills" className='container'>
                    <h3>My skills:</h3>
                    <div className="row align-items-center">
                        <div className='col-sm flex flex-column'>
                            <TbBrandCSharp size={60} />
                            <p>C#/.NET</p>
                        </div>
                        <div className='col-sm flex flex-column'>
                            <BsFiletypeSql size={50} />
                            <p>SQL</p>
                        </div>
                        <div className='col-sm flex flex-column'>
                            <BiLogoReact size={60} />
                            <p>React</p>
                        </div>

                    </div>
                    <div className='row align-items-center'>
                        <div className='col-sm flex flex-column'>
                            <AiFillHtml5 size={60} />
                            <p>HTML5</p>
                        </div>
                        <div className='col-sm flex flex-column'>
                            <SiCss3 size={50} />
                            <p>CSS3</p>
                        </div>
                        <div className='col-sm flex flex-column'>
                            <BiLogoJavascript size={60} />
                            <p>Javascript</p>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    )
}

export default Story