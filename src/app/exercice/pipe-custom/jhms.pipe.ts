import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jhms'
})
export class JhmsPipe implements PipeTransform {

  transform(value: number): string {

    let jours = Math.floor(value / 86400)
    value = value - (jours * 86400)

    let heures = Math.floor(value / 3600)
    value = value - (heures * 3600)

    let minutes = Math.floor(value / 60)
    value = value - (minutes * 60)

    let secondes = value


    let strForJours = "Jour"
    let nbJoursStr = jours.toString()
    if(jours > 1) strForJours += "s"
    if(jours < 10) nbJoursStr = "0" + nbJoursStr

    let strForHeures = "Heure"
    let nbHeuresStr = heures.toString()
    if(heures > 1) strForHeures += "s"
    if(heures < 10) nbHeuresStr = "0" + nbHeuresStr

    let strForMinutes = "Minute"
    let nbMinutesStr = minutes.toString()
    if(minutes > 1) strForMinutes += "s"
    if(minutes < 10) nbMinutesStr = "0" + nbMinutesStr

    let strForSecondes = "Seconde"
    let nbSecondesStr = secondes.toString()
    if(secondes > 1) strForSecondes += "s"
    if(secondes < 10) nbSecondesStr = "0" + nbSecondesStr




    return `${nbJoursStr} ${strForJours} - 
    ${nbHeuresStr} ${strForHeures} - 
    ${nbMinutesStr} ${strForMinutes} - 
    ${nbSecondesStr} ${strForSecondes}`
  }

}
