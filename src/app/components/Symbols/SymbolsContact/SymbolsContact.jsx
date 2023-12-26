import Image from "next/image"

export default function SymbolsContact() {
  return (
    <>
        <div className="blueSymbol">
            <Image
            src="/symbols/persistencia-2.png"
            alt='Persistence symbol'
            height={280}
            width={280}
            />
        </div>
        <div className="yellowSymbol">
            <Image
                src="/symbols/resistencia.png"
                alt='Resistence symbol'
                height={445}
                width={445}
            />
        </div>
        <div className="whiteSymbol">
            <Image
                src="/symbols/vencer.png"
                alt='Avenge symbol'
                height={330}
                width={330}
            />
        </div>
    </>
  )
}
