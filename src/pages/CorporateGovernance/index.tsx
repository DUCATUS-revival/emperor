import { FC } from 'react'
import { Route } from 'react-router-dom'
import { TaxManagementPolicy } from '../../modules/CorporateGovernance/TaxManagementPolicy'
import { RiskManagementPolicy } from '../../modules/CorporateGovernance/RiskManagementPolicy'
import { AntiBriberyPolicy } from '../../modules/CorporateGovernance/AntiBriberyPolicy'
import { CodeOfConduct } from '../../modules/CorporateGovernance/CodeOfConduct'

import './CorporateGovernance.scss'

export const CorporateGovernance: FC = () => {
  return (
    <main className='corporate-governance'>
      <div className='corporate-governance__preview'>
        <div className='row row-md'>
          <h1 className='h1 corporate-governance__preview-title'>
            <Route
              exact
              path='/corporate_governance/anti_bribery_policy'
              component={() => <span> EMPEROR HOLDINGS ANTI-BRIBERY POLICY</span>}
            />
            <Route
              exact
              path='/corporate_governance/code_of_conduct'
              component={() => <span> EMPEROR HOLDINGS CODE OF CONDUCT</span>}
            />
            <Route
              exact
              path='/corporate_governance/risk_management_policy'
              component={() => <span>EMPEROR HOLDINGS RISK MANAGEMENT POLICY</span>}
            />
            <Route
              exact
              path='/corporate_governance/tax_management_policy'
              component={() => <span> EMPEROR HOLDINGS RESPONSIBLE TAX MANAGEMENT POLICY</span>}
            />
          </h1>
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
