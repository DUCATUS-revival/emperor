import { FC } from 'react'
import { Route, useLocation } from 'react-router-dom'
import { TaxManagementPolicy } from '../../modules/CorporateGovernance/TaxManagementPolicy'
import { RiskManagementPolicy } from '../../modules/CorporateGovernance/RiskManagementPolicy'
import { AntiBriberyPolicy } from '../../modules/CorporateGovernance/AntiBriberyPolicy'
import { CodeOfConduct } from '../../modules/CorporateGovernance/CodeOfConduct'

import './CorporateGovernance.scss'

export const CorporateGovernance: FC = () => {
  const { pathname } = useLocation()

  return (
    <main className='corporate-governance'>
      <div className='corporate-governance__preview'>
        <div className='row row-md'>
          <h1 className='h1 corporate-governance__preview-title'>EMPEROR HOLDINGS ANTI-BRIBERY POLICY</h1>
        </div>
      </div>
      <div className='lines'>
        <div className='corporate-governance__content'>
          <Route exact path='/corporate_governance/anti_bribery_policy' component={AntiBriberyPolicy} />
          <Route exact path='/corporate_governance/code_of_conduct' component={CodeOfConduct} />
          <Route exact path='/corporate_governance/risk_management_policy' component={RiskManagementPolicy} />
          <Route exact path='/corporate_governance/tax_management_policy' component={TaxManagementPolicy} />
        </div>
      </div>
    </main>
  )
}
