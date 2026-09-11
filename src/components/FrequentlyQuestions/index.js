import DuvidaItem from './props'
import { frequentlyQuestions } from '@/helpers/frequentlyQuestions'

const DuvidasFrequentes = () => {
  return (
    <div className="w-full">
      {frequentlyQuestions.map((duvida, i) => (
        <DuvidaItem
          key={duvida.id}
          index={i + 1}
          pergunta={duvida.pergunta}
          resposta={duvida.resposta}
        />
      ))}
    </div>
  );
};

export default DuvidasFrequentes;
