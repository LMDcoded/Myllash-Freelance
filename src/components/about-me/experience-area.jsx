import React from 'react';

const contents = {
  title: 'Personal Experience',
  text_1: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,',
  text_2: 'Must explain to you how all this mistaken idea of denouncing works pleasure and praising uts pain was born and I will gives you a itself completed account of the system, and sed expounds the ut actual teachings of that greater sed explores truth. Denouncing works pleasures and praising pains was us born and I will gives you a completed ut workers accounts of the system. sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
  feature_items: [
    {
      title: 'Skills', desc: "Must explain to you how all praising uts pain was born and I will gives you a itself completed account of the system, and sed expounds the ut actual teachings of that greater",
      lists: ['Extramural Funding', 'Bacteria Markers', 'Type of system involved', 'Nam nec mi euismod euismod']
    },
    {
      title: 'Education', desc: "Must explain to you how all praising uts pain was born and I will gives you a itself completed account of the system, and sed expounds the ut actual teachings of that greater",
      lists: ['Extramural Funding', 'Bacteria Markers', 'Type of system involved', 'Nam nec mi euismod euismod']
    },
    {
      title: 'Awards', desc: "Must explain to you how all praising uts pain was born and I will gives you a itself completed account of the system, and sed expounds the ut actual teachings of that greater",
      lists: ['Extramural Funding', 'Bacteria Markers', 'Type of system involved', 'Nam nec mi euismod euismod']
    },
  ]
}

const { title, text_1, text_2, feature_items } = contents;

const ExperienceArea = () => {
  return (
    <>
      <div className="tp-skill-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="amskill">
                <div className="amskill__title">
                  <h3 className="am-skill-title">{title}</h3>
                  <p className="pb-10">{text_1}</p>
                  <p>{text_2}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row feature-bottom-space">
            {feature_items.map((item, i) => {
              const {title,desc,lists} = item;
              return <div key={i} className="col-xl-4 col-lg-4">
                <div className="amfeature">
                  <div className="amfeature__item">
                    <h4 className="am-skill-sm-title">{title}</h4>
                    <p className={`am-p-space-${i+1}`}>{desc}</p>
                  </div>
                  <div className="amfeature__list">
                    <ul>
                      {lists.map((l,i) => <li key={i}><i className="fal fa-check"></i>{l}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ExperienceArea;